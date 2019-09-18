import { Component, ChangeDetectorRef } from '@angular/core';
import { MazeService } from './maze.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public maze: Array<Block> = [];
    public eltismo: boolean = true;
    public crossover: number = 0.7;
    public mutation: number = 0.3;
    public populationLength: number = 200;
    public maxGenerations: number = 100;
    public solution: string = "0101011010010110010000000110101010100101101010111001";
    public characters: Array<string> = ["00", "01", "10", "11"];
    public genesTotal: number;
    public log: Array<string> = [];
    public isLoading: boolean = false;

    constructor(private ref: ChangeDetectorRef, private mazeService: MazeService) {
        this.genesTotal = this.solution.length / 2;
        this.maze = mazeService.generateMaze();
    }

    public ngOnInit(): void { }

    public start(): void {
        this.isLoading = true;
        this.ref.detectChanges();

        let hasSolution = false;
        let generation = 0;

        this.log = [];

        //cria a primeira população aleatória
        let population = this.createPopulation(this.genesTotal, this.populationLength);
        this.log.push("Iniciando... Aptidão da solução: " + 270);

        //verifica se tem a solucao
        hasSolution = this.verifyHasSolution(population);

        while (!hasSolution && generation < this.maxGenerations) {
            generation++;

            //cria nova populacao
            population = this.newGeneration(population, this.eltismo);

            this.log.push("Geração " + generation + " | Aptidão: " + population.individuos[0].fitness + " | Melhor: " + population.individuos[0].genes);

            console.log("Geração " + generation + " | Aptidão: " + population.individuos[0].fitness + " | Melhor: " + population.individuos[0].genes);

            this.ref.detectChanges();

            //verifica se tem a solucao
            hasSolution = this.verifyHasSolutionReal(population.individuos[0]);
        }

        if (generation == this.maxGenerations) {
            this.log.push("Atingiu o número máximo de gerações | " + population.individuos[0].genes + " | Aptidão: " + population.individuos[0].fitness);

            console.log("Atingiu o número máximo de gerações | " + population.individuos[0].genes + " | Aptidão: " + population.individuos[0].fitness);
        }

        if (hasSolution) {
            this.log.push("Encontrado resultado na geração " + generation + " | " + population.individuos[0].genes + " (Aptidão: " + population.individuos[0].fitness + ")");

            console.log("Encontrado resultado na geração " + generation + " | " + population.individuos[0].genes + " (Aptidão: " + population.individuos[0].fitness + ")");
        }

        this.printWay(population.individuos[0]);
        this.isLoading = false;
        this.ref.detectChanges();
    }

    private verifyHasSolution(population: Population): boolean {
        let individuo: Individuo = null;

        population.individuos.forEach(i => {
            if (i.genes == this.solution) {
                individuo = i;
                return;
            }
        });

        return individuo == null ? false : true;
    }

    private verifyHasSolutionReal(individuo: Individuo): boolean {
        let lastField = this.getLastFieldTraveled(individuo);
        let exitField = this.maze[9];

        return individuo.wallsHit == 0 && !individuo.hadImpossibleMove && exitField.id == lastField.id;
    }

    private getLastFieldTraveled(individuo: Individuo): Block {
        let maze = this.maze.slice(0, this.maze.length);
        maze.forEach(m => m.current = false);
        maze[90].current = true;

        let currentField = maze.find(m => m.current);

        for (let i = 0; i < individuo.genes.length; i += 2) {
            let move = individuo.genes[i] + individuo.genes[i + 1];

            currentField = this.getNextMazeFieldByDirection(maze, currentField, move);
        }

        return currentField;
    }

    private newGeneration(population: Population, elitismo: boolean): Population {
        //nova população do mesmo tamanho da antiga
        let newPopulation = new Population();
        newPopulation.individuos = [];

        population.individuos.sort((a, b) => (a.fitness < b.fitness) ? 1 : -1);

        //se tiver elitismo, mantém o melhor indivíduo da geração atual
        if (elitismo) {
            newPopulation.individuos.push(population.individuos[0]);

            // let geneSolution = this.createIndividuoByGenes("0101011010010110010000000110101010100101101010111001");
            // newPopulation.individuos.push(geneSolution);
        }

        //insere novos indivíduos na nova população, até atingir o tamanho máximo
        while (newPopulation.individuos.length < this.populationLength) {
            //seleciona os 2 pais por torneio
            let parents = this.tournament(population);

            let children = [];

            //verifica a taxa de crossover, se sim realiza o crossover, se não, mantém os pais selecionados para a próxima geração
            if (this.randomDoubleFromInterval(0, 100) <= this.crossover) {
                children = this.generateCrossover(parents[1], parents[0]);
            }
            else {
                children.push(parents[0]);
                children.push(parents[1]);
            }

            //adiciona os filhos na nova geração
            newPopulation.individuos.push(children[0]);
            newPopulation.individuos.push(children[1]);
        }

        //ordena a nova população
        newPopulation.individuos.sort((a, b) => (a.fitness < b.fitness) ? 1 : -1)
        return newPopulation;
    }

    public tournament(population: Population): Array<Individuo> {
        let newPopulation = new Population();
        newPopulation.individuos = [];

        //seleciona 3 indivíduos aleatóriamente na população
        newPopulation.individuos.push(population.individuos[this.randomIntFromInterval(0, this.populationLength - 1)]);
        newPopulation.individuos.push(population.individuos[this.randomIntFromInterval(0, this.populationLength - 1)]);
        newPopulation.individuos.push(population.individuos[this.randomIntFromInterval(0, this.populationLength - 1)]);

        //ordena a população
        newPopulation.individuos.sort((a, b) => (a.fitness < b.fitness) ? 1 : -1);

        let parents: Array<Individuo> = [];

        //seleciona os 2 melhores deste população
        parents.push(newPopulation.individuos[0]);
        parents.push(newPopulation.individuos[1]);

        return parents;
    }

    public generateCrossover(individuo1: Individuo, individuo2: Individuo) {
        //sorteia o ponto de corte
        let pontoCorte1 = this.randomIntFromInterval(0, (individuo1.genes.length / 2) - 2) + 1;
        let pontoCorte2 = this.randomIntFromInterval(0, (individuo1.genes.length / 2) - 2) + individuo1.genes.length / 2;

        let children = [];

        //pega os genes dos pais
        let parentGene1 = individuo1.genes;
        let parentGene2 = individuo2.genes;

        //realiza o corte, 
        let childGene1 = parentGene1.substr(0, pontoCorte1);
        childGene1 = childGene1 + parentGene2.substr(pontoCorte1, (pontoCorte2 - pontoCorte1));
        childGene1 = childGene1 + parentGene1.substr(pontoCorte2, (parentGene1.length - pontoCorte2));

        let childGene2 = parentGene2.substr(0, pontoCorte1);
        childGene2 = childGene2 + parentGene1.substr(pontoCorte1, (pontoCorte2 - pontoCorte1));
        childGene2 = childGene2 + parentGene2.substr(pontoCorte2, (parentGene2.length - pontoCorte2));

        //cria o novo indivíduo com os genes dos pais
        children.push(this.createIndividuoByGenes(childGene1));
        children.push(this.createIndividuoByGenes(childGene2));

        return children;
    }

    private createPopulation(genesTotal: number, length: number): Population {
        let population = new Population();
        population.length = length;

        population.individuos = [];
        for (let i = 0; i < length; i++) {
            population.individuos[i] = this.createIndividuo(genesTotal);
        }

        return population;
    }

    private createIndividuo(genesTotal: number): Individuo {
        let individuo = new Individuo();
        individuo.genes = "";
        individuo.fitness = 0;

        for (let i = 0; i < genesTotal; i++) {
            var index = this.randomIntFromInterval(0, 3);
            individuo.genes = individuo.genes + this.characters[index];
        }

        //this.generateFitness(individuo);
        this.generateFitnessReal(individuo);

        return individuo;
    }

    private createIndividuoByGenes(genes: string): Individuo {
        let individuo = new Individuo();
        individuo.genes = genes;

        //se for mutar, cria um gene aleatório
        if (this.randomDoubleFromInterval(0, 100) <= this.mutation) {
            let geneNovo = "";
            let posAleatoria = this.randomIntFromInterval(0, genes.length / 2);

            if (posAleatoria % 2 != 0) {
                posAleatoria--;
            }

            if (posAleatoria == 54) {
                posAleatoria--;
            }

            for (let i = 0; i < genes.length; i++)
            {
                if (i == posAleatoria + 1) continue;

                if (i == posAleatoria) {
                    geneNovo = geneNovo + this.characters[this.randomIntFromInterval(0, this.characters.length - 1)];
                }
                else {
                    geneNovo = geneNovo + genes[i];
                }

            }
            individuo.genes = geneNovo;
        }

        //this.generateFitness(individuo);
        this.generateFitnessReal(individuo);

        return individuo;
    }

    private randomIntFromInterval(min, max): number { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    private randomDoubleFromInterval(min, max): number { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min) / 100;
    }

    private resetCurrent(): void {
        this.maze.find(m => m.current).current = false;
        this.maze[90].current = true;
    }

    private generateFitness(individuo: Individuo): void {
        if(!individuo.fitness) individuo.fitness = 0;

        for (let i = 0; i < this.solution.length; i += 2) {
            var path = this.solution[i] + this.solution[i + 1];
            var genesPath = individuo.genes[i] + individuo.genes[i + 1];

            if (path == genesPath) {
                individuo.fitness++;
            }
        }
    }

    private generateFitnessReal(individuo: Individuo): void {
        if (!individuo.fitness) individuo.fitness = 0;
        if (!individuo.wallsHit) individuo.wallsHit = 0;
        if (!individuo.repeatedInput) individuo.repeatedInput = 0;

        this.resetCurrent();
        let fieldsTraveled = [];
        let currentField = this.maze.find(m => m.current);

        let verifyMove = (direction: Direction, cantMove: boolean): void => {
            if (currentField.possibleDirections.findIndex(d => d == direction) > -1) {
                if (cantMove) {
                    individuo.wallsHit++;
                }

                if (fieldsTraveled.findIndex(f => f.id == currentField.id) > -1) {
                    individuo.repeatedInput++;
                }
                else {
                    fieldsTraveled.push(currentField);
                }
            }
            else {
                if (fieldsTraveled.findIndex(f => f.id == currentField.id) > -1) {
                    individuo.repeatedInput++;
                }
                else {
                    fieldsTraveled.push(currentField);
                }

                individuo.fitness -= 100;
                individuo.hadImpossibleMove = true;
            }
        }

        for (let i = 0; i < individuo.genes.length; i += 2) {
            let move = individuo.genes[i] + individuo.genes[i + 1];

            switch (move) {
                case Direction.Left:
                    verifyMove(move, currentField.wLeft);
                    break;
                case Direction.Top:
                    verifyMove(move, currentField.wTop);
                    break;
                case Direction.Right:
                    verifyMove(move, currentField.wRight);
                    break;
                case Direction.Bottom:
                    verifyMove(move, currentField.wBottom);
                    break;
            }

            currentField = this.getNextMazeFieldByDirection(this.maze, currentField, move);
        }

        individuo.fitness -= individuo.wallsHit;
        individuo.fitness -= individuo.repeatedInput;

        this.generatePenalty(individuo, fieldsTraveled);
    }

    private generatePenalty(individuo: Individuo, fieldsTraveled: Array<Block>): void {
        let penalty = this.maze[9].cordX - fieldsTraveled[fieldsTraveled.length - 1].cordX;
        penalty += fieldsTraveled[fieldsTraveled.length - 1].cordY - this.maze[9].cordY;
        
        individuo.fitness += penalty;
    }

    private getNextMazeFieldByDirection(maze: Array<Block>, currentField: Block, move: string): Block {
        let oldIndex = maze.findIndex(m => m.current);

        if (currentField.possibleDirections.findIndex(d => d == move) > -1) {
            switch (move) {
                case Direction.Left:
                    oldIndex--;
                    break;
                case Direction.Top:
                    oldIndex = oldIndex - 10;
                    break;
                case Direction.Right:
                    oldIndex++;
                    break;
                case Direction.Bottom:
                    oldIndex = oldIndex + 10;
                    break;
            }

            maze.find(m => m.current).current = false;
            maze[oldIndex].current = true;
        }

        return maze[oldIndex];
    }

    private printWay(individuo: Individuo): void{
        this.resetCurrent();
        this.maze.forEach(m => m.active = false);

        let currentField = this.maze.find(m => m.current);
        currentField.active = true;

        for (let i = 0; i < individuo.genes.length; i += 2) {
            let move = individuo.genes[i] + individuo.genes[i + 1];

            currentField = this.getNextMazeFieldByDirection(this.maze, currentField, move);
            currentField.active = true;
        }
    }
}

export enum Direction {
    Left = "00",
    Top = "01",
    Right = "10",
    Bottom = "11"
}

export class Block {
    public id: number;
    public cordX: number;
    public cordY: number;
    public wLeft: boolean;
    public wRight: boolean;
    public wTop: boolean;
    public wBottom: boolean;
    public current: boolean;
    public active: boolean;
    public possibleDirections: Array<Direction>;
}

export class Population {
    public individuos: Array<Individuo>;
    public length: number;
}

export class Individuo {
    public genes: string;
    public fitness: number;
    public wallsHit: number;
    public repeatedInput: number;
    public hadImpossibleMove: boolean;
}


import { Component } from '@angular/core';

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
    public populationLength: number = 100;
    public maxGenerations: number = 100;
    public solution: string = "010101000001010001101010010000000000010100000011000100";
    public characters: Array<string> = ["00", "01", "10", "11"];
    public genesTotal: number;
    public log: Array<string> = [];

    constructor() {
        this.genesTotal = this.solution.length / 2;
    }

    public ngOnInit(): void {
        for (let i = 0; i < 100; i++) {
            this.maze.push(
                {
                    id: i,
                    wLeft: false,
                    wRight: false,
                    wTop: false,
                    wBottom: false,
                    active: false
                }
            );
        }

        //#region Line 0 | 0-9

        this.maze[0].wTop = true;
        this.maze[0].wLeft = true;

        this.maze[1].wTop = true;
        this.maze[1].wBottom = true;

        this.maze[2].wTop = true;
        this.maze[2].wBottom = true;

        this.maze[3].wTop = true;
        this.maze[3].wBottom = true;

        this.maze[4].wTop = true;
        this.maze[4].wRight = true;

        this.maze[5].wTop = true;
        this.maze[5].wLeft = true;

        this.maze[6].wTop = true;
        this.maze[6].wBottom = true;

        this.maze[7].wTop = true;
        this.maze[7].wBottom = true;

        this.maze[8].wTop = true;
        this.maze[8].wRight = true;

        this.maze[9].wTop = true;
        this.maze[9].wLeft = true;

        //#endregion

        //#region Line 1 | 10-19

        this.maze[10].wRight = true;
        this.maze[10].wLeft = true;

        this.maze[11].wTop = true;
        this.maze[11].wBottom = true;
        this.maze[11].wLeft = true;

        this.maze[12].wTop = true;
        this.maze[12].wBottom = true;

        this.maze[13].wTop = true;
        this.maze[13].wBottom = true;

        this.maze[14].wRight = true;
        this.maze[14].wBottom = true;

        this.maze[15].wRight = true;
        this.maze[15].wLeft = true;

        this.maze[16].wTop = true;
        this.maze[16].wLeft = true;

        this.maze[17].wTop = true;
        this.maze[17].wRight = true;

        this.maze[18].wBottom = true;
        this.maze[18].wLeft = true;

        this.maze[19].wRight = true;
        this.maze[19].wBottom = true;

        //#endregion

        //#region Line 2 | 20-29

        this.maze[20].wLeft = true;

        this.maze[21].wTop = true;
        this.maze[21].wBottom = true;

        this.maze[22].wTop = true;
        this.maze[22].wBottom = true;

        this.maze[23].wTop = true;
        this.maze[23].wBottom = true;

        this.maze[24].wTop = true;
        this.maze[24].wBottom = true;

        this.maze[25].wRight = true;

        this.maze[26].wRight = true;
        this.maze[26].wBottom = true;
        this.maze[26].wLeft = true;

        this.maze[27].wLeft = true;

        this.maze[28].wTop = true;
        this.maze[28].wBottom = true;

        this.maze[29].wTop = true;
        this.maze[29].wRight = true;

        //#endregion

        //#region Line 3 | 30-39

        this.maze[30].wBottom = true;
        this.maze[30].wLeft = true;

        this.maze[31].wTop = true;
        this.maze[31].wBottom = true;

        this.maze[32].wTop = true;
        this.maze[32].wBottom = true;

        this.maze[33].wTop = true;
        this.maze[33].wRight = true;

        this.maze[34].wTop = true;
        this.maze[34].wBottom = true;
        this.maze[34].wLeft = true;

        this.maze[35].wBottom = true;

        this.maze[36].wTop = true;
        this.maze[36].wBottom = true;

        this.maze[37].wRight = true;
        this.maze[37].wBottom = true;

        this.maze[38].wTop = true;
        this.maze[38].wRight = true;
        this.maze[38].wLeft = true;

        this.maze[39].wRight = true;
        this.maze[39].wLeft = true;

        //#endregion

        //#region Line 4 | 40-49

        this.maze[40].wTop = true;
        this.maze[40].wLeft = true;

        this.maze[41].wTop = true;
        this.maze[41].wRight = true;
        this.maze[41].wBottom = true;

        this.maze[42].wTop = true;
        this.maze[42].wLeft = true;

        this.maze[43].wRight = true;

        this.maze[44].wTop = true;
        this.maze[44].wLeft = true;

        this.maze[45].wTop = true;
        this.maze[45].wBottom = true;

        this.maze[46].wTop = true;
        this.maze[46].wBottom = true;

        this.maze[47].wTop = true;
        this.maze[47].wBottom = true;

        this.maze[48].wRight = true;
        this.maze[48].wBottom = true;

        this.maze[49].wBottom = true;
        this.maze[49].wLeft = true;

        //#endregion

        //#region Line 5 | 50-59

        this.maze[50].wBottom = true;
        this.maze[50].wLeft = true;

        this.maze[51].wTop = true;
        this.maze[51].wBottom = true;

        this.maze[52].wRight = true;

        this.maze[53].wLeft = true;

        this.maze[54].wBottom = true;

        this.maze[55].wTop = true;
        this.maze[55].wBottom = true;

        this.maze[56].wTop = true;
        this.maze[56].wBottom = true;

        this.maze[57].wTop = true;
        this.maze[57].wBottom = true;

        this.maze[58].wTop = true;
        this.maze[58].wBottom = true;

        this.maze[59].wTop = true;
        this.maze[59].wRight = true;

        //#endregion

        //#region Line 6 | 60-69

        this.maze[60].wTop = true;
        this.maze[60].wLeft = true;

        this.maze[61].wTop = true;
        this.maze[61].wBottom = true;

        this.maze[62].wRight = true;
        this.maze[62].wBottom = true;

        this.maze[63].wRight = true;
        this.maze[63].wLeft = true;

        this.maze[64].wTop = true;
        this.maze[64].wBottom = true;
        this.maze[64].wLeft = true;

        this.maze[65].wTop = true;

        this.maze[66].wTop = true;
        this.maze[66].wRight = true;

        this.maze[67].wTop = true;
        this.maze[67].wLeft = true;

        this.maze[68].wTop = true;
        this.maze[68].wBottom = true;

        this.maze[69].wRight = true;
        this.maze[69].wBottom = true;

        //#endregion

        //#region Line 7 | 70-79

        this.maze[70].wLeft = true;

        this.maze[71].wTop = true;

        this.maze[72].wTop = true;
        this.maze[72].wBottom = true;

        this.maze[73].wBottom = true;

        this.maze[74].wTop = true;

        this.maze[75].wRight = true;

        this.maze[76].wRight = true;
        this.maze[76].wLeft = true;

        this.maze[77].wBottom = true;
        this.maze[77].wLeft = true;

        this.maze[78].wTop = true;
        this.maze[78].wBottom = true;

        this.maze[79].wTop = true;
        this.maze[79].wRight = true;

        //#endregion

        //#region Line 8 | 80-89

        this.maze[80].wRight = true;
        this.maze[80].wLeft = true;

        this.maze[81].wRight = true;
        this.maze[81].wLeft = true;

        this.maze[82].wTop = true;
        this.maze[82].wBottom = true;
        this.maze[82].wLeft = true;

        this.maze[83].wTop = true;
        this.maze[83].wRight = true;
        this.maze[83].wBottom = true;

        this.maze[84].wRight = true;
        this.maze[84].wLeft = true;

        this.maze[85].wRight = true;
        this.maze[85].wLeft = true;

        this.maze[86].wBottom = true;
        this.maze[86].wLeft = true;

        this.maze[87].wTop = true;
        this.maze[87].wBottom = true;

        this.maze[88].wTop = true;
        this.maze[88].wBottom = true;

        this.maze[89].wRight = true;

        //#endregion

        //#region Line 9 | 90-99

        this.maze[90].wRight = true;
        this.maze[90].wBottom = true;

        this.maze[91].wBottom = true;
        this.maze[91].wLeft = true;

        this.maze[92].wTop = true;
        this.maze[92].wBottom = true;

        this.maze[93].wTop = true;
        this.maze[93].wBottom = true;

        this.maze[94].wRight = true;
        this.maze[94].wBottom = true;

        this.maze[95].wLeft = true;
        this.maze[95].wBottom = true;

        this.maze[96].wTop = true;
        this.maze[96].wBottom = true;

        this.maze[97].wTop = true;
        this.maze[97].wBottom = true;

        this.maze[98].wTop = true;
        this.maze[98].wBottom = true;

        this.maze[99].wRight = true;
        this.maze[99].wBottom = true;

        //#endregion
    }

    public start(): void {
        let hasSolution = false;
        let generation = 0;

        this.log = [];

        //cria a primeira população aleatória
        let population = this.createPopulation(this.genesTotal, this.populationLength);
        this.log.push("Iniciando... Aptidão da solução: " + this.solution.length);

        //verifica se tem a solucao
        hasSolution = this.verifyHasSolution(population);

        while (!hasSolution && generation < this.maxGenerations) {
            generation++;

            //cria nova populacao
            population = this.newGeneration(population, this.eltismo);

            this.log.push("Geração " + generation + " | Aptidão: " + population.individuos[0].fitness + " | Melhor: " + population.individuos[0].genes);

            //verifica se tem a solucao
            hasSolution = this.verifyHasSolution(population);
        }

        if (generation == this.maxGenerations) {
            this.log.push("Atingiu o número máximo de gerações | " + population.individuos[0].genes + " " + population.individuos[0].fitness);
        }

        if (hasSolution) {
            this.log.push("Encontrado resultado na geração " + generation + " | " + population.individuos[0].genes + " (Aptidão: " + population.individuos[0].fitness + ")");
        }
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

    private newGeneration(population: Population, elitismo: boolean): Population {
        //nova população do mesmo tamanho da antiga
        let newPopulation = new Population();
        newPopulation.individuos = [];

        population.individuos.sort((a, b) => (a.fitness < b.fitness) ? 1 : -1);

        //se tiver elitismo, mantém o melhor indivíduo da geração atual
        if (elitismo) {
            newPopulation.individuos.push(population.individuos[0]);
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

        this.generateFitness(individuo);

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
                    geneNovo = geneNovo + this.characters[this.randomIntFromInterval(0, this.characters.length)];
                }
                else {
                    geneNovo = geneNovo + genes[i];
                }

            }
            individuo.genes = geneNovo;
        }

        this.generateFitness(individuo);

        return individuo;
    }

    private randomIntFromInterval(min, max): number { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    private randomDoubleFromInterval(min, max): number { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min) / 100;
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
}

export class Block {
    public id: number;
    public wLeft: boolean;
    public wRight: boolean;
    public wTop: boolean;
    public wBottom: boolean;
    public active: boolean;
}

export class Population {
    public individuos: Array<Individuo>;
    public length: number;
}

export class Individuo {
    public genes: string;
    public fitness: number;
}


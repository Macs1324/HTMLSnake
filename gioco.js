let colore_cella_vuota = "lightblue";
let colore_serpentone = "darkcyan"


function colora(riga, colonna, colore)
{
    if(riga >= 0 && riga < 20 && colonna >= 0 && colonna < 20)
    {
        document.getElementsByClassName("riga")[riga].getElementsByClassName("cella")[colonna].style.backgroundColor = colore;
    }
}

class Quadratino
{
    constructor(posizione_riga, posizione_colonna)
    {
        this.riga = posizione_riga;
        this.colonna = posizione_colonna;

        this.riga_prec = this.riga;
        this.colonna_prec = this.colonna;
    }

    muovi(posizione_riga, positione_colonna)
    {
        colora(this.riga, this.colonna, colore_cella_vuota);

        this.riga_prec = this.riga;
        this.colonna_prec = this.colonna;

        this.riga = posizione_riga;
        this.colonna = positione_colonna;

        if(this.riga < 0)
        {
            this.riga = 20 - 1;
        }
        if(this.riga >= 20)
        {
            this.riga = 0;
        }

        if(this.colonna < 0)
        {
            this.colonna = 20 - 1;
        }
        if(this.colonna >= 20)
        {
            this.colonna = 0;
        }

        colora(this.riga, this.colonna, colore_serpentone);
    }
}

class Serpentone
{
    constructor(num_quadratini)
    {
        this.quadratini = [];
        for(let i = 0; i < num_quadratini; i++)
        {
            this.quadratini[i] = new Quadratino(10, i + 5)
        }
    }

    muovi(direzione_riga, direzione_colonna)
    {
        this.quadratini[0].muovi(
            this.quadratini[0].riga + direzione_riga,
            this.quadratini[0].colonna + direzione_colonna
        );

        for(let i = 1; i < this.quadratini.length; i++)
        {
            this.quadratini[i].muovi(
                this.quadratini[i - 1].riga_prec,
                this.quadratini[i - 1].colonna_prec
            );
        }
    }
}

let serpentone = new Serpentone(5);

let dir_riga = 0;
let dir_colonna = 1;

let intervallo = 100;

function muovi_serpentone()
{
    serpentone.muovi(dir_riga, dir_colonna);
}

setInterval(muovi_serpentone, intervallo);
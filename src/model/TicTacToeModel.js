class TicTacToeModel
{
    #xJon;
    #vege;
    #elemek;
    #gyoztesMezoKombinaciok;

    constructor()
    {
        this.#xJon = true;
        this.#vege = false;
        this.#elemek = [];
        for (let i = 0; i < 9; i++)
        {
            this.#elemek.push(0);
        }
        this.#gyoztesMezoKombinaciok = [

            // sorok

            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],

            // oszlopok

            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],

            // átlók

            [0, 4, 8],
            [2, 4, 6]
        ];
    }

    get vege()
    {
        return this.#vege;
    }

    get xJon()
    {
        return this.#xJon;
    }

    get elemek()
    {
        return [...this.#elemek];
    }

    setElem(index)
    {
        const URES = this.#elemek[index] === 0;
        if (URES)
        {
            this.#elemek[index] = this.#xJon ? 1 : -1;
            let i = 0;
            while (i < this.#gyoztesMezoKombinaciok.length && ((keresett, gyoztesMezoKombinacio) => {
                let i = 0;
                while (i < 3 && this.#elemek[gyoztesMezoKombinacio[i]] === keresett)
                {
                    i++;
                }
                return i < 3;
            })(this.#xJon ? 1 : -1, this.#gyoztesMezoKombinaciok[i]))
            {
                i++;
            }
            if (i >= this.#gyoztesMezoKombinaciok.length)
            {
                this.#xJon = !this.#xJon;
            }
            else
            {
                this.#vege = true;
            }
        }
        return URES;
    }
}

export default TicTacToeModel;
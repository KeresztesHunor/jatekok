class LightsOutModel
{
    #vege;
    #elemek;

    constructor()
    {
        this.#vege = false;
        this.#elemek = [];
        for (let i = 0; i < 9; i++)
        {
            this.#elemek.push(true);
        }
    }

    get vege()
    {
        return this.#vege;
    }

    get elemek()
    {
        return [...this.#elemek];
    }

    setElemek(index)
    {
        const [x, y] = this.#indexToCoords(index);
        this.setElem(x, y);
        this.setElem(x + 1, y);
        this.setElem(x - 1, y);
        this.setElem(x, y + 1);
        this.setElem(x, y - 1);
        let i = 0;
        while (i < this.#elemek.length && !this.#elemek[i])
        {
            i++;
        }
        if (i >= this.#elemek.length)
        {
            this.#vege = true;
        }
    }

    setElem(x, y)
    {
        if (x >= 0 && x < 3 && y >= 0 && y < 3)
        {
            this.#elemek[this.#coordsToIndex(x, y)] = !this.#elemek[this.#coordsToIndex(x, y)];
        }
    }

    #indexToCoords(index)
    {
        return [index % 3, Math.floor(index / 3)];
    }

    #coordsToIndex(x, y)
    {
        return y * 3 + x;
    }
}

export default LightsOutModel;
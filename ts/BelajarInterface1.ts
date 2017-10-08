function MyHewan(hewan : {jenis:string}){
    console.log(hewan.jenis);
}

interface BaseA{
    a : string ,
    b : string
}


interface Kucing {
    jenis : string
    habitat : string
    myInfo() : void
}

class Singa implements Kucing{
    private _jenis: string;
    private _habitat : string;
    constructor(habitat : string , jenis : string){
        this._jenis = jenis;
        this._habitat = habitat;
    }

    myInfo(): void {
        console.log(
            `Jenis : ${this._jenis} dan Habitat : ${this._habitat}`
        );
    }

    get jenis(): string {
        return this._jenis;
    }

    set jenis(value: string) {
        this._jenis = value;
    }

    get habitat(): string {
        return this._habitat;
    }

    set habitat(value: string) {
        this._habitat = value;
    }
}

let singa = new Singa("Savana","Afrika");

let k : Kucing = new Singa("Savana","Asia");

k.myInfo();

function readBaseA(baseA : BaseA){
    console.log(baseA.a + "" + baseA.b);
}


let implBaseA = {a : "arief", b: "kahfi"};

readBaseA(implBaseA);

let kucing = {jenis:"kucing",umur:1};

MyHewan(kucing);

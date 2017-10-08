function MyHewan(hewan) {
    console.log(hewan.jenis);
}
var Singa = /** @class */ (function () {
    function Singa(habitat, jenis) {
        this._jenis = jenis;
        this._habitat = habitat;
    }
    Singa.prototype.myInfo = function () {
        console.log("Jenis : " + this._jenis + " dan Habitat : " + this._habitat);
    };
    Object.defineProperty(Singa.prototype, "jenis", {
        get: function () {
            return this._jenis;
        },
        set: function (value) {
            this._jenis = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Singa.prototype, "habitat", {
        get: function () {
            return this._habitat;
        },
        set: function (value) {
            this._habitat = value;
        },
        enumerable: true,
        configurable: true
    });
    return Singa;
}());
var singa = new Singa("Savana", "Afrika");
var k = new Singa("Savana", "Asia");
k.myInfo();
function readBaseA(baseA) {
    console.log(baseA.a + "" + baseA.b);
}
var implBaseA = { a: "arief", b: "kahfi" };
readBaseA(implBaseA);
var kucing = { jenis: "kucing", umur: 1 };
MyHewan(kucing);

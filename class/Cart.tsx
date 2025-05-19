class Cart{
    private name:String;
    private date:Date;
    private listProduct:Array<Product>;

    constructor(name:String, date:Date,listProduct:Array<Product>){
        this.name=name;
        this.date=date;
        this.listProduct=listProduct;
    }
}
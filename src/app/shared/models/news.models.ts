export class News {
  constructor(
    public id:number,
    public name:string,
    public category:string,
    public image:string,
    public slug:string,
    public description:string,
    public description_short:string,
    public author:string,
    public date:number,
    public hot_news:boolean,

  ){}
}
export class CategoryNews {
  constructor(
    public name:string,
  ){}
}

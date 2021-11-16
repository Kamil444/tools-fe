export type ToolType = 'mill' | 'ballMill' | 'drill' | 'gunDrill' | 'insert' | 'tap';

export interface Enums {
  listName: listName;
  listQuantity: listQuantity;
  typeOfTool: typeOfTool;
}

export interface ToolData {
    name: string;
    typeOfTool: ToolType;
    quantity: number;
    junkQuantity: number;    
}

export interface IToolServiceData {
    items?: ToolData[];    
}
export enum typeOfTool {
    All = '',
    Mill = 'mill', 
    BallMill = 'ballMill', 
    Drill = 'drill', 
    GunDrill = 'gunDrill',
    Insert ='insert',     
    Tap = 'tap'
  };

 export enum listQuantity {
  '10 ' = '10',
  '20 ' = '20',
  '30 ' = '30'
 };
 export enum listName{
   index = '#',
   toolName = 'Tool Name',
   toolType = 'Tool Type',
   quantity = 'Quantity'
 }


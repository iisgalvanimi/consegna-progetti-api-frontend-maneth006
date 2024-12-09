export interface carta1 {
    id: string;             
    name: string;           
    images: {             
      small: string;        
      large: string;        
    };
    weaknesses: {
      type: string;
    }[];
    types: string[];        
  }
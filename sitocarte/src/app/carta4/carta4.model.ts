export interface carta4 {
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
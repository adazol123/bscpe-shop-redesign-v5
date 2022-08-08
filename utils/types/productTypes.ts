export interface ProductItemTypes {
  __name?: string;
  __description?: string;
  __owner: string;
  __category: "men" | "women" | "kids";
  __meta?: {
    __colors?: [
      {
        __color_name?: string;
        __quantity: number;
      }
    ];
    __sizes?: string[];
  };
}

export interface ProductItemTypes {
  __name?: string;
  __description?: string;
  __owner: string;
  __category: "men" | "women" | "kids";
  __meta: {
    __types: [
      {
        __color?: string;
        __quantity: number;
      }
    ];
    __sizes: string[];
    __image_url?: string;
  };
}

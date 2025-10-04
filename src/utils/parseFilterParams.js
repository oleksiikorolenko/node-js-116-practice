import { validCategoryList } from "../constants/index.js";

const parseCategory = (category) => {
    if (!validCategoryList.includes(category)) {
return;
    }
    return category;
};

const parseNumber = (price) => {
    const isNumber = Number(price);
    if (isNaN(isNumber)) {
        return;
    }
    return isNumber;
};


export const parseFilterParams = ({ minPrice, maxPrice, category }) => {
    const parsedCategory = parseCategory(category);
    const parsedMinPrice = parseNumber(minPrice);
    const parsedMaxPrice = parseNumber(maxPrice);

    return ({
        minPrice: parsedMinPrice,
        maxPrice: parsedMaxPrice,
        category: parsedCategory,
    });
};

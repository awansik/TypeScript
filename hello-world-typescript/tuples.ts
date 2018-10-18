function SquarePerimeterAndArea(side: number) {
    let perimeter: number = 4 * side;
    let area: number = side * side;
    return [perimeter, area];
}

console.log(SquarePerimeterAndArea(67));
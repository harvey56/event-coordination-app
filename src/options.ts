const image = require('../public/pic.jpg');

interface imgList {
    img: string;
    title: string;
    author: string;
    cols: number;
}

const imgList:imgList[] = [
    {
        img: image,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
];

export default imgList;
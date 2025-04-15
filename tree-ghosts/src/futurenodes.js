import broken from './assets/broken.jpg';
import broken2 from './assets/brokentree.jpg';
import tree2 from './assets/tree2.png';

const FutureNodes = [
    {
        id: 0,
        name: "Magnolia Mason",
        number: "2",
        img: tree2,
        lat: 33.748720,
        long: -84.373093,
        desc: "I hang out with the Mason family and I might be the second oldest tree in the cemetery!"
    },
    {
        id: 1,
        name: "Atkins Tree",
        number: "105",
        img: broken2,
        lat: 33.74973,
        long: -84.373995,
        desc: "I'm still here"
    },
    {
        id: 2,
        name: "Broken Tree",
        number: "674",
        img: broken,
        lat: 33.74873,
        long: -84.373905,
        desc:"It got taken away and the stump is left in its place."
    },
];

export default FutureNodes;
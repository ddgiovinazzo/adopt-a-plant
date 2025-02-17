import boo from '../assets/boo.svg';
import fernie from '../assets/fernie.svg';
import figgy from '../assets/figgy.svg';
import lila from '../assets/lila.svg';
import mcthorny from '../assets/mcthorny.svg';
import monster from '../assets/monster.svg';
import ophelia from '../assets/ophelia.svg';
import pothos from '../assets/pothos.svg';
import sally from '../assets/sally.svg';
import sneaky from '../assets/sneaky.svg';
import spidey from '../assets/spidey.svg';
import vera from '../assets/vera.svg';

const products = [
  {
    id: '1',
    name: 'Fiddle Leaf Figgy',
    description:
      'A beautiful and popular houseplant with large, glossy leaves.',
    price: 45.0,
    image: figgy,
  },
  {
    id: '2',
    name: 'Sneaky Snake Plant',
    description:
      'An easy-to-care-for plant that thrives in low light conditions.',
    price: 25.0,
    image: sneaky,
  },
  {
    id: '3',
    name: 'Monsta Monstera',
    description: 'A trendy plant known for its unique, split leaves.',
    price: 55.0,
    image: monster,
  },
  {
    id: '4',
    name: 'Pothos the Brave',
    description:
      'A versatile and hardy plant that can grow in a variety of conditions.',
    price: 20.0,
    image: pothos,
  },
  {
    id: '5',
    name: 'Cactus McThorny',
    description:
      'A resilient plant that can survive in the harshest conditions.',
    price: 30.0,
    image: mcthorny,
    adopted: true,
  },
  {
    id: '6',
    name: 'Fernie Fern',
    description:
      'A lush and delicate plant that adds a touch of green to any space.',
    price: 35.0,
    image: fernie,
  },
  {
    id: '7',
    name: 'Bamboo Boo',
    description:
      'A fast-growing plant that brings a touch of the tropics to your home.',
    price: 40.0,
    image: boo,
  },
  {
    id: '8',
    name: 'Aloe Vera Vera',
    description: 'A succulent plant known for its medicinal properties.',
    price: 15.0,
    image: vera,
  },
  {
    id: '9',
    name: 'Peace Lily Lila',
    description: 'A beautiful plant with white blooms that purify the air.',
    price: 25.0,
    image: lila,
    adopted: true,
  },
  {
    id: '10',
    name: 'Spider Plant Spidey',
    description:
      'A popular houseplant known for its long, arching leaves and easy care.',
    price: 20.0,
    image: spidey,
    adopted: true,
  },
  {
    id: '11',
    name: 'Succulent Sally',
    description:
      'A charming succulent that requires minimal care and adds a touch of green to any space.',
    price: 10.0,
    image: sally,
    comingSoon: true,
  },
  {
    id: '12',
    name: 'Orchid Ophelia',
    description:
      'An elegant orchid with stunning blooms that bring a touch of luxury to your home.',
    price: 50.0,
    image: ophelia,
    comingSoon: true,
  },
];

export default products;

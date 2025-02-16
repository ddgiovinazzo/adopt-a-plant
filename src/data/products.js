import figgy from '../assets/figgy.svg';
import sneaky from '../assets/sneaky.svg';
import monster from '../assets/monster.svg';
import pothos from '../assets/pothos.svg';
import mcthorny from '../assets/mcthorny.svg';
import fernie from '../assets/fernie.svg';
import boo from '../assets/boo.svg';
import vera from '../assets/vera.svg';
import lila from '../assets/lila.svg';
import spidey from '../assets/spidey.svg';
import sally from '../assets/sally.svg';
import ophelia from '../assets/ophelia.svg';

const products = [
  {
    name: 'Fiddle Leaf Figgy',
    description: 'A beautiful and popular houseplant with large, glossy leaves.',
    price: 45.00,
    image: figgy,
  },
  {
    name: 'Sneaky Snake Plant',
    description: 'An easy-to-care-for plant that thrives in low light conditions.',
    price: 25.00,
    image: sneaky
  },
  {
    name: 'Monsta Monstera',
    description: 'A trendy plant known for its unique, split leaves.',
    price: 55.00,
    image: monster
  },
  {
    name: 'Pothos the Brave',
    description: 'A versatile and hardy plant that can grow in a variety of conditions.',
    price: 20.00,
    image: pothos
  },
  {
    name: 'Cactus McThorny',
    description: 'A resilient plant that can survive in the harshest conditions.',
    price: 30.00,
    image: mcthorny,
    adopted: true
  },
  {
    name: 'Fernie Fern',
    description: 'A lush and delicate plant that adds a touch of green to any space.',
    price: 35.00,
    image: fernie
  },
  {
    name: 'Bamboo Boo',
    description: 'A fast-growing plant that brings a touch of the tropics to your home.',
    price: 40.00,
    image: boo
  },
  {
    name: 'Aloe Vera Vera',
    description: 'A succulent plant known for its medicinal properties.',
    price: 15.00,
    image: vera
  },
  {
    name: 'Peace Lily Lila',
    description: 'A beautiful plant with white blooms that purify the air.',
    price: 25.00,
    image: lila,
    adopted: true
  },
  {
    name: 'Spider Plant Spidey',
    description: 'A popular houseplant known for its long, arching leaves and easy care.',
    price: 20.00,
    image: spidey,
    adopted: true
  },
  {
    name: 'Succulent Sally',
    description: 'A charming succulent that requires minimal care and adds a touch of green to any space.',
    price: 10.00,
    image: sally,
    comingSoon: true
  },
  {
    name: 'Orchid Ophelia',
    description: 'An elegant orchid with stunning blooms that bring a touch of luxury to your home.',
    price: 50.00,
    image: ophelia,
    comingSoon: true
  }
];

export default products;
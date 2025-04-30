import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, ContainerItems, Title } from './styles';

export function CategoriesCarousel(){
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');
     
      setCategories(data);
    }
    loadCategories();
  }, []);

  const responsive = {
    superLargerDesktop: {
      breakpoint: { max: 3000, min: 2000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1280 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1280, min: 690 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 690, min: 0 },
      items: 1,
    },
  };
  return (
    <Container>
      <Title>Categorias</Title>
      <Carousel
        responsive={responsive}
        infinite={true}
        partialVisbile={false}
        itemClass="carousel-Itens"
        autoPlay
        autoPlaySpeed={5000}
        customTransition = "all .5" 
        
      >
        {categories.map((category) => (
          <ContainerItems key={category.id}  $imageUrl={category.url}>
            <p>{category.name} </p>
          </ContainerItems>
        ))}
      </Carousel>
    </Container>
  );
}

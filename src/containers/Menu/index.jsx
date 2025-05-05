import { useEffect, useState } from 'react';
import {
  Container,
  Banner,
  CategoryMenu,
  ProductsContainer,
  CategoryButton,
  ReturnButton,
} from './styles';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import { CardProduct } from '../../components/CardProduct';
import { useLocation, useNavigate } from 'react-router-dom';

export function Menu() {
  const [categories, setCategories] = useState([]);
  const [products, setProdutcs] = useState([]);
  const [filteredProducts, setFilterProdutcs] = useState([]);

  const navigate = useNavigate();

  const { search } = useLocation();

  const queryParamas = new URLSearchParams(search);

  const [activeCategory, setActiveCategory] = useState(() => {
    const categoryId = +queryParamas.get('categoria');

    if (categoryId) {
      return categoryId;
    }
    return 0;
  });

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');

      const newCategories = [{ id: 0, name: 'Todas' }, ...data];
      setCategories(newCategories);
    }

    async function loadProducts() {
      const { data } = await api.get('/products');
      const newProducts = data.map((product) => ({
        currencyValue: formatPrice(product.price),
        ...product,
      }));
      setProdutcs(newProducts);
    }
    loadCategories();
    loadProducts();
  }, []);

  useEffect(() => {
    if (activeCategory === 0) {
      setFilterProdutcs(products);
    } else {
      const newfilterProducts = products.filter(
        (product) => product.category_id === activeCategory,
      );
      setFilterProdutcs(newfilterProducts);
    }
  }, [products, activeCategory]);

  return (
    <Container>
      <Banner>
        <h1>
          O MELHOR
          <br /> HAMBURGUER <br />
          ESTA AQUI <br />
          <span>Esse cardápio está irresistível!</span>
        </h1>
      </Banner>
      <CategoryMenu>
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            $isActiveCategory={category.id === activeCategory}
            onClick={() => {
              navigate(
                {
                  pathname: '/cardapio',
                  search: `?categoria=${category.id}`,
                },
                {
                  replace: true,
                },
              );
              setActiveCategory(category.id);
            }}
          >
            {category.name}
          </CategoryButton>
        ))}
        <ReturnButton type="button" onClick={() => navigate('/')}>
          Inicio
        </ReturnButton>
      </CategoryMenu>
      <ProductsContainer>
        {filteredProducts.map((products) => (
          <CardProduct product={products} key={products.id} />
        ))}
      </ProductsContainer>
      <div></div>
    </Container>
  );
}

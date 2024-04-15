const productos = [
    {
      "name": "Rotor Blade Assembly",
      "category": "Helicopter Parts",
      "price": 1500,
      "image": "./utils/main-qimg-ccb86668c3fe1566321ec2cce6ec620e.jpg"
    },
    {
      "name": "Turbine Engine",
      "category": "Aircraft Parts",
      "price": 5000,
      "image": "./utils/f.elconfidencial.com_original_170_277_457_1702774577d413ba5c980b775299053b.jpg"
    },
    {
      "name": "Avionics System",
      "category": "Aircraft Parts",
      "price": 3000,
      "image": "./utils/F-20_Tigershark_launching_AGM-65_Maverick.webp"
    },
    {
      "name": "Propeller",
      "category": "Aircraft Parts",
      "price": 2000,
      "image": "./utils/sr71-I.jpg"
    },
    {
      "name": "Landing Gear Strut",
      "category": "Aircraft Parts",
      "price": 1000,
      "image": "./utils/F-20_Tigershark_launching_AGM-65_Maverick.webp"
    },
    {
      "name": "Helicopter Tail Rotor",
      "category": "Helicopter Parts",
      "price": 1200,
      "image": "./utils/main-qimg-a99d09ee6cb2649af6c4aa016296221b.jpg"
    }
  ];
  
  const productosContainer = document.querySelector('.productos-container');
  const listaCarrito = document.querySelector('#listaCarrito');
  const btnVaciarCarrito = document.querySelector('#btnVaciarCarrito');
  
  let carrito = [];
  
  // Función para renderizar los productos en el HTML
  function renderizarProductos() {
    productosContainer.innerHTML = ''; // Limpiar el contenedor
  
    productos.forEach((producto, index) => {
      const tarjetaProducto = document.createElement('div');
      tarjetaProducto.classList.add('producto', 'animate__animated', 'animate__fadeIn');
  
      tarjetaProducto.innerHTML = `
        <img src="${producto.image}" alt="${producto.name}">
        <h3>${producto.name}</h3>
        <p>${producto.price} €</p>
        <p>Categoría: ${producto.category}</p>
        <button data-id="${index}">Añadir a carrito</button>
      `;
  
      productosContainer.appendChild(tarjetaProducto);
  
      // Evento click para el botón "Añadir a carrito"
      tarjetaProducto.querySelector('button').addEventListener('click', () => {
        agregarAlCarrito(index);
      });
    });
  }
  
  // Función para agregar un producto al carrito
  function agregarAlCarrito(index) {
    const producto = productos[index];
  
    if (producto) {
      carrito.push(producto);
      renderizarCarrito();
  
      // Mostrar mensaje de confirmación con Swal
      Swal.fire({
        title: 'Producto añadido',
        text: `Se ha añadido ${producto.name} a tu carrito`,
        icon: 'success',
        confirmButtonColor: '#3085d6'
      });
    } else {
      console.error('Producto no encontrado');
    }
  }
  
  // Función para renderizar el contenido del carrito
  function renderizarCarrito() {
    listaCarrito.innerHTML = ''; // Limpiar la lista
  
    carrito.forEach(producto => {
      const itemCarrito = document.createElement('li');
      itemCarrito.textContent = `${producto.name} - ${producto.price} €`;
  
      // Botón para eliminar el producto del carrito
      const btnEliminar = document.createElement('button');
      btnEliminar.textContent = 'Eliminar';
      btnEliminar.classList.add('btn-eliminar');
      btnEliminar.addEventListener('click', () => {
        eliminarDelCarrito(producto);
      });
  
      itemCarrito.appendChild(btnEliminar);
      listaCarrito.appendChild(itemCarrito);
    });
  }
  
  // Función para eliminar un producto del carrito
  function eliminarDelCarrito(producto) {
    carrito = carrito.filter(item => item !== producto);
    renderizarCarrito();
  }
  
  // Llama a la función para cargar los productos al inicio
  renderizarProductos();
  
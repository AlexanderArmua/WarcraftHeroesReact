# Crear un elemento en pantalla

    ```Js
        const _QUE_  = <h1>Un elemento</h1>;
        const _DONDE_ = document.getElementById("app");
        ReactDOM.render(_QUE_, _DONDE_);
    ```

    ```Js
        const nombreElemento = "a";
        const atributos = { href: "https://google.com", target: "_blank" };
        const contenido = "Ir a Google";
        const otroElemento = React.createElement(nombreElemento, atributos, contenido);
    ```

# JSX

    ```Jsx
    const elementos = (
        <div>
            {elemento}
            <a href={_URL_} target="_blank" rel="noopener noreferrer">{_CONTENIDO_} - {unaFunc()}</a>
        </div>
    );

    ReactDOM.render(elementos, container);
    ```

# Poner imagenes

```Jsx
    // Se puede poner la imagen directamente.
    import unLogo from "../images/UnBanner.svg";
    // O se puede llamar al URL en src
```

# Importar estilos

```Jsx
    // Directo de node_modules
    import "bootstrap/dist/css/bootstrap.css";
    // Directo de un archivo.
    import "./styles/Badge.css";
```

# Props (Pequeños argumentos/atributos a los componentes/funciones)

```JSX
    // Badje.js
    class Badge extends React.Component {
        render() {
            return (
                <h1>{this.props.firstName} <br /> {this.props.lastName}</h1>
            );
        }
    }

    // Index.js
    ReactDOM.render(<Badge firstName="A" lastName="B"/>, _CONTAINER_);

```

# Input controlado

```Jsx
    // Cuando se agrega el para que guarde su value en un solo lugar
    <input value={this.state.whyIsHere}/>
```

# Actualizar State de Parent Component

```Jsx
    // BadjeNew.js
    handleChange = e => {
        this.setState({
        form: {
            ...this.state.form,
            [e.target.name]: e.target.value
        }
        });
    };

    <BadgeForm onChange={this.handleChange}/>

    // BadgeForm.js
    <input onChange={this.props.onChange}/>
```

# React Router v4

```Jsx
    <BrowserRouter></BrowserRouter> // 1 por app es el padre de todos
    <Route path="/unaRuta/:Param" component={} /> // Pagina a mostrar
        // El componente, recibe "match" "history" y "location"
        // Se toma con
        this.props.match.params.Param
    <Switch /> // Para presentar 1 sola ruta en base al URL
    <Link /> // Un <a> evita contra el <a> que recargue todo cambiuando la URL

    <React.Fragment> // Elemento que no se renderiza
```

# Ciclo de vida de un componente

```Jsx
    Montaje => // Cuando se inserta el codigo en el DOM
        Methods => "constructor", "render", "componentDidMount"
    Actualizacion => // Cuando el props o el estado del componente cambia
        Methods => "render", "componentDidUpdate(prevProps, prevState)"
    Desmontaje => // Cuando sale de escena
        Methods => "componentWillUnmount" (limpiar memoria)
```

# Llamadas a una API

```Jsx
    // 3 estados. => Loading =>1 Error =>2 Datos.
    // Puede llegar una respuesta con datos vacio o con datos.
```

# Hooks

## Componentes como function son mas eficientes pero un poco mas complejos de codear.

### Si tiene datos y maneja estados clases

### Si solo muestra info Hooks

    1. Se pasa el class a function.
    2. Creo la funcion que cambie estado.

```Jsx
    // Opcion 1, modificar un valor directo:
    function Component(props) {
        const [count, setCount] = React.useState(0);
        <button onClick={() => setCount(count + 1) }></button>
    }

    // Opcion 2, funcion aparte con logica propia que puedo exportar
    // De esta forma el hook puede tener estado y lo modifica.
    function useIncreaseCount(maxNumber) {
        const [count, setCount] = React.useState(0);
        if (count > maxNumber) {
            setCount(0);
        }
        return [count, setCount];
    }

    function Component(props) {
        const [count, setCount] = useIncreaseCount(15);
        //...
        <button onClick={() => setCount(count + 1) }></button>
    }
```

# Hooks AND Memorize

## React.useMemo, recalcula todo si cambia heroes o si cambia filterValue.

```Jsx
    const [filteredHeroes, setFilteredHeroes] = React.useState(heroes);

    React.useMemo(() => {
        const resultado = heroes.filter(hero => {
            const allString = `${hero.firstName} ${hero.lastName} ${hero.faction} ${hero.heroClass}`;
            return allString.toLowerCase().includes(filterValue.toLowerCase());
        });

        setFilteredHeroes(resultado);
    }, [heroes, filterValue]);
```

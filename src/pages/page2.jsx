import { useState } from 'react';
import { v4 as uuid } from 'uuid'

function Page2() {
  const [titulo, setTitulo] = useState("");
  const [titulos, setTitulos] = useState([]);

  function handleAdd() {
    if (titulo) {

      const arrTitulos = {
        id: uuid(),
        titulo: titulo
      }

      const arrNew = [...titulos];
      arrNew.unshift(arrTitulos);

      setTitulos(arrNew);
      setTitulo("");
      //console.log(arrNew);           
    }
  }

  function handleDelete(id) {
    const newArr = titulos.filter((f) => f.id !== id);
    setTitulos(newArr);
    //console.log("delete " + id);
  }

function handleUpdate(id){  
  const item = titulos.filter((f) => f.id === id)[0];
  handleDelete(item.id);
  setTitulo(item.titulo);
  //console.log("update " + item.titulo);
}

  return (
    <div>
      
      <div>
        <input
          type="text"
          value={titulo}
          onChange={((e) => setTitulo(e.target.value))}          
        />
        <button
          type="button"
          onClick={handleAdd}
        >
          Adicionar
        </button>
      </div>

      <div>
        {titulos.map((m) => (
          <div key={m.id}>
            <p
              onClick={(e) => {
                e.stopPropagation();
                handleUpdate(m.id);
              }}
            >
              {m.titulo}
            </p>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(m.id);
              }}
            >
              Excluir
            </button>
          </div>
        ))
        }
      </div>
      
    </div>
  );
}

export default Page2;
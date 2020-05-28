import React, { useState } from 'react';
import './App.css';
import { API } from './helpers/API';

function App() {
    const [formBook, setForm] = useState({
        title: '',
        author: '',
        pagesCount: '',
        publisher: '',
    });
    const [bookAuthor, setBookAuthor] = useState('');
    const [items, setItems] = useState({ type: '', items: [] });
    const submitForm = async (e) => {
        e.preventDefault();
        const r = await API.post('books/', formBook);
        console.log('Cigan-log: submitForm -> r.data', r.data);
        if (!!r.data) alert('Успешно добавлена книжка');
        else alert('Заполните поля');
    };

    const getBooks = async (e) => {
        e.preventDefault();
        const r = await API.get(`books/${bookAuthor}`);
        console.log('Cigan-log: getBooks -> r', r);
        setItems(r.data);
    };

    return (
        <div>
            <form onSubmit={(e) => submitForm(e)}>
                <label htmlFor="title">название книги:</label>
                <input
                    type="text"
                    id="title"
                    value={formBook.title}
                    onChange={(e) =>
                        setForm({ ...formBook, title: e.target.value })
                    }
                />
                <label htmlFor="author">Автор:</label>
                <input
                    type="text"
                    id="author"
                    value={formBook.author}
                    onChange={(e) =>
                        setForm({ ...formBook, author: e.target.value })
                    }
                />
                <label htmlFor="pagesCount">Количество страниц:</label>
                <input
                    type="number"
                    id="pagesCount"
                    value={formBook.pagesCount}
                    onChange={(e) =>
                        setForm({ ...formBook, pagesCount: e.target.value })
                    }
                />
                <label htmlFor="publisher">Издание:</label>
                <input
                    type="text"
                    id="publisher"
                    value={formBook.publisher}
                    onChange={(e) =>
                        setForm({ ...formBook, publisher: e.target.value })
                    }
                />
                <button type="submit">Добавить книгу</button>
            </form>
            <form onSubmit={(e) => getBooks(e)}>
                <label htmlFor="bookAuthor">Введите имя автора</label>
                <input
                    id="bookAuthor"
                    type="text"
                    value={bookAuthor}
                    onChange={(e) => setBookAuthor(e.target.value)}
                />
                <button type="submit">Получить кники</button>
            </form>
            {items.items.map((item) => {
                return (
                    <div>
                        <h1>
                            {items.type === 'authors' ? 'Автор:' : 'Книга:'}
                        </h1>
                        <p>{item}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default App;

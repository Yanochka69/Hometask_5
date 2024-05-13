import { createSlice } from "@reduxjs/toolkit";

const cardsMoviesSlice = createSlice({
    name: 'movies',
    initialState: {
        moviesArray: [
            {id: 0, img: '/src/images/posters/Постер_Леон.jpg', name: 'Леон', slogan: '«Вы не можете остановить того, кого не видно»', time: '133 мин.', country: ['Франция', 'США'], year: 1994, genre: ['боевик', 'триллер', 'драма', 'криминал'], producer: 'Люк Бессон', actors: ['Жан Рено', 'Натали Портман', 'Гари Олдман', 'Дэнни Айелло'], description: 'Профессиональный убийца Леон неожиданно для себя самого решает помочь 12-летней соседке Матильде, семью которой убили коррумпированные полицейские.', rating: 8.7, isFavourite: false, isWatchLater: false, comments: []},
            {id: 1, img: '/src/images/posters/Постер_1+1.jpg', name: '1+1', slogan: '«Sometimes you have to reach into someone elses world to find out whats missing in your own»', time: '126 мин.', country: ['Франция'], year: 2011, genre: ['драма', 'комедия'], producer: 'Оливье Накаш', actors: ['Франсуа Клюзе', 'Омар Си'], description: 'Аристократ на коляске нанимает в сиделки бывшего заключенного. Искрометная французская комедия с Омаром Си.', rating: 8.9, isFavourite: false, isWatchLater: false, comments: []},
            {id: 2, img: '/src/images/posters/Постер_Интерстеллар.jpg', name: 'Интерстеллар', slogan: '«Следующий шаг человечества станет величайшим»', time: '169 мин.', country: ['США', 'Великобритания', 'Канада'],  year: 2014, genre: ['фантастика', 'драма', 'приключения'], producer: 'Кристофер Нолан', actors: ['Мэттью Макконахи', 'Энн Хэтэуэй'], description: 'Когда засуха, пыльные бури и вымирание растений приводят человечество к продовольственному кризису, коллектив исследователей и учёных отправляется сквозь червоточину (которая предположительно соединяет области пространства-времени через большое расстояние) в путешествие, чтобы превзойти прежние ограничения для космических путешествий человека и найти планету с подходящими для человечества условиями.', rating: 8.7, isFavourite: false, isWatchLater: false, comments: []},
            {id: 3, img: '/src/images/posters/Постер_ОстровПроклятых.jpg', name: 'Остров проклятых', slogan: '«Some places never let you go»', time: '138 мин.', country: ['США'],  year: 2009, genre: ['триллер', 'детектив', 'драма'], producer: 'Мартин Скорсезе', actors: ['Леонардо Ди Каприо', 'Марк Руффало'], description: 'Два американских судебных пристава отправляются на один из островов в штате Массачусетс, чтобы расследовать исчезновение пациентки клиники для умалишенных преступников. При проведении расследования им придется столкнуться с паутиной лжи, обрушившимся ураганом и смертельным бунтом обитателей клиники. ', rating: 8.5, isFavourite: false, isWatchLater: false, comments: []},
            {id: 4, img: '/src/images/posters/Постер_Начало.jpg', name: 'Начало', slogan: '«Твой разум - место преступления»', time: '148 мин.', country: ['Великобритания', 'США'],  year: 2010, genre: ['научная фантастика', 'боевик', 'триллер', 'драма'], producer: 'Кристофер Нолан', actors: ['Леонардо Ди Каприо', 'Кэн Ватанабэ', 'Джозеф Гордон-Левитт', 'Марион Котийяр', 'Эллен Пейдж', 'Том Харди', 'Киллиан Мёрфи', 'Том Беренджер', 'Майкл Кейн'], description: 'Кобб – талантливый вор, лучший из лучших в опасном искусстве извлечения: он крадет ценные секреты из глубин подсознания во время сна, когда человеческий разум наиболее уязвим. Редкие способности Кобба превратили его в извечного беглеца и лишили всего, что он когда-либо любил. И вот у Кобба появляется шанс исправить ошибки. Его последнее дело может вернуть все назад, но для этого ему нужно совершить невозможное – инициацию.', rating: 8.7, isFavourite: false, isWatchLater: false, comments: []},
            {id: 5, img: '/src/images/posters/Постер_ТёмныйРыцарь.jpg', name: 'Тёмный рыцарь', slogan: '«Добро пожаловать в мир Хаоса!»', time: '152 мин.', country: ['Великобритания', 'США'],  year: 2008, genre: ['фантастика', 'боевик', 'триллер', 'преступление', 'драма'], producer: 'Кристофер Нолан', actors: ['Кристиан Бейл', 'Хит Леджер', 'Гэри Олдмен', 'Аарон Экхарт'], description: 'Бэтмен поднимает ставки в войне с криминалом. С помощью лейтенанта Джима Гордона и прокурора Харви Дента он намерен очистить улицы Готэма от преступности. Сотрудничество оказывается эффективным, но скоро они обнаружат себя посреди хаоса, развязанного восходящим криминальным гением, известным напуганным горожанам под именем Джокер.', rating: 8.5, isFavourite: false, isWatchLater: false, comments: []},
            {id: 6, img: '/src/images/posters/Постер_ЗелёнаяКнига.jpg', name: 'Зелёная Книга', slogan: '«Inspired by a True Friendship»', time: '130 мин.', country: ['Китай', 'США'],  year: 2018, genre: ['комедийная драма', 'роуд-муви', 'биография'], producer: 'Питер Фаррелли', actors: ['Вигго Мортенсен', 'Махершала Али'], description: 'Путешествие итальянца-вышибалы и чернокожего пианиста по Америке 1960-х.', rating: 8.5, isFavourite: false, isWatchLater: false, comments: []},
            {id: 7, img: '/src/images/posters/Постер_Хатико.jpg', name: 'Хатико: Самый верный друг', slogan: '«Подлинная история веры, преданности и вечной любви»', time: '89 мин.', country: ['Великобритания', 'США'], year: 2008, genre: ['драма', 'семейный', 'биография'], producer: 'Лассе Халльстрём', actors: ['Ричард Гир'], description: 'Преданный пес каждый день встречает хозяина на вокзале, что бы ни случилось. История, которая потрясла мир.', rating: 8.4, isFavourite: false, isWatchLater: false, comments: []},
            {id: 8, img: '/src/images/posters/Постер_Волк.jpg', name: 'Волк с Уолл-стрит', slogan: '«Earn. Spend. Party»', time: '180 мин.', country: ['США'], year: 2013, genre: ['драма', 'криминал', 'биография', 'комедия'], producer: 'Мартин Скорсезе', actors: ['Леонардо ДиКаприо', 'Джона Хилл', 'Марго Робби'], description: 'Восхождение циника-гедониста на бизнес-олимп 1980-х. Блистательный тандем Леонардо ДиКаприо и Мартина Скорсезе', rating: 8.0, isFavourite: false, isWatchLater: false, comments: []},
            {id: 9, img: '/src/images/posters/Постер_ПятыйЭлемент.jpg', name: 'Пятый элемент', slogan: '«It Mu5t Be Found»', time: '126 мин.', country: ['Франция', 'Великобритания'], year: 1997, genre: ['фантастика', 'боевик', 'комедия', 'мелодрама'], producer: 'Люк Бессон', actors: ['Брюс Уиллис', 'Милла Йовович', 'Гари Олдман'], description: 'Каждые пять тысяч лет открываются двери между измерениями и темные силы стремятся нарушить существующую гармонию. Каждые пять тысяч лет Вселенной нужен герой, способный противостоять этому злу. XXIII век. Нью-йоркский таксист Корбен Даллас должен решить глобальную задачу - спасение всего рода человеческого. Зло в виде раскаленной массы, наделенной интеллектом, надвигается на Землю. Победить его можно, только лишь собрав воедино четыре элемента (они же стихии - земля, вода, воздух и огонь) и добавив к ним загадочный пятый элемент.', rating: 8.1, isFavourite: false, isWatchLater: false, comments: []}
          ],
        favouriteMoviesArray: [],
        watchLaterMoviesArray: []
    },
    reducers: {
        sortHighToLow: (state) => {
            state.moviesArray.sort((a, b) => b.rating - a.rating)
            console.log(state.length)
        },

        sortLowToHigh: (state) => {
            state.moviesArray.sort((a, b) => a.rating - b.rating)
        },

        addOrRemoveFavourite: (state, action) => {
            const [index, name] = action.payload
            if (state.favouriteMoviesArray.some(item => item[0] === index && item[1] === name)) {
                const ind = state.favouriteMoviesArray.findIndex(item => item[0] === index && item[1] === name)
                state.favouriteMoviesArray.splice(ind, 1)
                const ind2 = state.moviesArray.findIndex(item => item.id == index && item.name == name)
                state.moviesArray[ind2].isFavourite = !state.moviesArray[ind2].isFavourite
            }
            else {
                state.favouriteMoviesArray.push([index, name])
                const ind2 = state.moviesArray.findIndex(item => item.id == index && item.name == name)
                state.moviesArray[ind2].isFavourite = !state.moviesArray[ind2].isFavourite
            }
        },

        addOrRemoveWatchLater: (state, action) => {
            const [index, name] = action.payload
            if (state.watchLaterMoviesArray.some(item => item[0] === index && item[1] === name)) {
                const ind = state.watchLaterMoviesArray.findIndex(item => item[0] === index && item[1] === name)
                state.watchLaterMoviesArray.splice(ind, 1)
                const ind2 = state.moviesArray.findIndex(item => item.id == index && item.name == name)
                state.moviesArray[ind2].isWatchLater = !state.moviesArray[ind2].isWatchLater
            }
            else {
                state.watchLaterMoviesArray.push([index, name])
                const ind2 = state.moviesArray.findIndex(item => item.id == index && item.name == name)
                state.moviesArray[ind2].isWatchLater = !state.moviesArray[ind2].isWatchLater
            }
        },

        addComment: (state, action) => {
            const [index, comment] = action.payload
            const ind = state.moviesArray.findIndex(item => item.id == index)
            if (comment.trim().length){
                state.moviesArray[ind].comments.push(comment)
            }
        }
    }
})

export const { sortHighToLow, sortLowToHigh, addOrRemoveFavourite, addOrRemoveWatchLater, addComment } = cardsMoviesSlice.actions

export default cardsMoviesSlice.reducer;
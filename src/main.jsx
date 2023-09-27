import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeContext } from './components/ThemeContext';
import Home from './components/Home'
import Topic from "./components/Topic";
import ErrorPage from './components/ErrorPage';

const fetcher = async () => {
  const response = await fetch('https://olegior-json-server.vercel.app/cheatsheet/');
  console.log(await response);
  return response.json()
}
console.log(fetcher());

export const data = [
  {
    path: 'components', title: 'Components', content: [
      { p: 'Приложения React состоят из компонентов. Компоненты позволяют разбить интерфейс на независимые части, про которые легко думать в отдельности. Их можно складывать вместе и использовать несколько раз. Компонент может быть маленьким, как кнопка, или большим, как целая страница.' },
      { p: 'Компоненты — это независимые и многократно используемые фрагменты кода, функции. Они служат той же цели, что и функции JavaScript, но работают изолированно и возвращают JSX.' },
      { h: 'Функциональные и классовые компоненты' },
      { p: 'Компонент бывает:' },
      { l: ['Функциональный', 'Классовый',] },
      { p: 'Проще всего объявить React-компонент как функцию:' },
      {
        c: `function Welcome(props) {
  return <h1> Привет, {props.name} </h1>;
}`},
      { p: `Эта функция — компонент, она получает данные в одном объекте («пропсы») в качестве параметра и возвращает React-элемент. Такие компоненты называются «функциональными», так как они буквально являются функциями.` },
      { p: `Компоненты можно определять как классы ES6:` },
      {
        c: `class Welcome extends React.Component {
  render() {
      return <h1> Привет, {this.props.name} </h1>;
  }
}`},
      { p: 'С точки зрения React, эти два компонента эквивалентны.' },
      { w: 'Компонент класса должен включать extends React.Component оператор. Этот оператор создает наследование для React.Component и предоставляет вашему компоненту доступ к функциям React.Component.' },
      { h: 'Композиция компонентов' },
      { p: 'Компоненты могут ссылаться на другие компоненты в возвращённом ими дереве. Это позволяет использовать одну и ту же абстракцию — компоненты — на любом уровне нашего приложения. Неважно, пишем ли мы кнопку, форму или целый экран: все они, как правило, представляют собой компоненты в React-приложениях.' },
      { p: 'Например, компонент App может отрендерить компонент Welcome несколько раз:' },
      {
        c: `function Welcome(props) {
return <h1>Привет, {props.name}</h1>;
}

function App() {
  return (
      <div>
          <Welcome name= "Алиса" />
          <Welcome name= "Базилио" />
          <Welcome name= "Буратино" />
      </div>
  );
}`},

      { h: 'Рендер компонентов' },
      {
        c: `function Welcome(props) {
  return <h1>Привет, {props.name}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Welcome name="Алиса" />;
root.render(element);`},
      {
        l: [`Мы вызываем root.render() c React-элементом <Welcome name="Алиса" />.`,
          `React вызывает наш компонент Welcome с пропсами {name: 'Алиса'}.`,
          `Наш компонент Welcome возвращает элемент <h1>Привет, Алиса</h1> в качестве результата.`,
          `React DOM делает минимальные изменения в DOM, чтобы получилось <h1>Привет, Алиса</h1>.`]
      },
      { w: `Всегда называйте компоненты с заглавной буквы. Если компонент начинается с маленькой буквы, React принимает его за DOM-тег.` },
      { h: 'Извлечение компонентов' },
      { p: 'В больших приложениях очень полезно иметь палитру компонентов, которые можно многократно использовать. Правило извлечения компонента: Если какая-то часть интерфейса многократно в нём повторяется (Button, Panel, Avatar) или сама по себе достаточно сложная (App, FeedStory, Comment), имеет смысл её вынести в независимый компонент.' },

    ]
  },
  {
    path: 'props', title: 'Props', content: [
      { p: 'Компоненты React используют props для связи друг с другом. Каждый родительский компонент может передавать некоторую информацию своим дочерним компонентам, предоставляя им реквизиты (пропсы).' },
      { p: 'Props - это объект. Получить его свойства можно также, как и при работе с обычным объектом:' },
      { w: 'Компонент никогда не должен что-то записывать в свои пропсы, пропсы можно только читать!' },

      {
        c: `// функциональный компонент
function MyComponent(props){
  return (<div>{props.message}</div>)
}

// классовый компонент
class MyComponent extends React.Component{
  constructor(props){
      super(props)
  }
  render(){
      return (<div>{this.props.message}</div>)
  }
}

// используя дектруктуризацию 
function MyComponent({message}){
  return (<div>{message}</div>)
}
`
      },
      { p: 'Если вы хотите присвоить пропсу значение по умолчанию, чтобы вернуться к нему, когда значение не указано, вы можете сделать это с помощью деструктуризации, поставив = и значение по умолчанию сразу после параметра:' },
      {
        c: `function Avatar({ person, size = 100 }) {
  // ...
}`},
      { p: 'Теперь, если компонент рендерится без size реквизита, size будет установлено значение 100. Значение по умолчанию используется только в том случае, если size реквизит отсутствует или если вы передаете size={undefined}. Но если вы передадите size={null}или size={0}, значение по умолчанию не будет использоваться.' },
      { w: 'Если не передавать значение в пропс, то по умолчанию оно будет true. Эти два JSX выражения эквивалентны:' },
      {
        c: `<MyTextBox autocomplete />
<MyTextBox autocomplete={true} />`},
      { p: 'В JSX-выражениях содержимое, которое расположено между открывающими и закрывающими тегами, передаётся с помощью специального пропса: props.children.' },
      { p: 'Если поместить строку между открывающим и закрывающим тегом, то props.children будет равно этой строке. Это полезно при создании встроенных HTML-элементов. HTML не экранируется, поэтому JSX можно писать так же, как HTML, к примеру:' },
      {
        c: `<MyComponent>Привет, мир!</MyComponent>
<div>Это одновременно и валидный HTML и JSX.</div>`},
      { w: 'JSX удаляет пустые строки и пробелы в начале и конце строки. Новые строки, примыкающие к тегу будут удалены. Новые строки между строковых литералов сжимаются в один пробел' },
      { p: 'Чтобы отобразить вложенные компоненты, можно указать несколько JSX-элементов в качестве дочерних.' },
      {
        c: `<MyContainer>
  <MyFirstComponent />
  <MySecondComponent />
</MyContainer>`},
      { p: 'Можно смешивать различные типы потомков: использовать строковый литерал вместе с JSX-элементами (1). Также React-компонент может возвращать массив (2) элементов:' },
      {
        c: `//(1)
<div>
  Ниже представлен список:
  <ul>
      <li>Элемент 1</li>
      <li>Элемент 2</li>
  </ul>
</div>

//(2)
render() {
  // Не нужно оборачивать список элементов в дополнительный элемент!
  return [
    <li key="A">Первый элемент</li>,
    <li key="B">Второй элемент</li>,
    <li key="C">Третий элемент</li>,
  ];
}`},
      { p: 'Можно передать любое JavaScript-выражение как дочерний компонент, обернув его в "{ }". Часто это бывает полезно при рендере списка JSX-выражений произвольной длины. Например, эта запись рендерит HTML-список:' },
      {
        c: `function Item(props) {
  return <li>{props.message}</li>;
}

function TodoList() {
  const todos = ['закончить документацию', 'отправить пулреквест', 'снова напомнить Паше про ревью'];
  return (
      <ul>
          {todos.map((message) => <Item key={message} message={message} />)}
      </ul>
  );
}` },
      { w: 'Дочерние компоненты, передаваемые пользовательскому компоненту, могут быть чем угодно с тем условием, что компонент преобразует их во что-то, что React сможет понять и отрендерить.' },
      { p: 'Пример передачи функции в качестве дочернего компонента:' },
      {
        c: `// Вызывает колбэк numTimes раз для создания повторяющего компонента
function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
  items.push(props.children(i));
  }
  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
  <Repeat numTimes={10}>
      {(index) => <div key={index}>Это элемент списка с ключом {index}</div>}
  </Repeat>
  );
}`},
      { p: 'Значения false, null, undefined и true — валидные дочерние компоненты. Просто они не рендерятся. Этот подход может быть полезным для рендера по условию. Вот пример, где JSX рендерит <Header />, если showHeader равняется true:' },
      {
        c: `<div>
  {showHeader && <Header />}
  <Content />
</div>`},
      { p: 'Есть один нюанс в том, что React будет рендерить «ложные» (falsy) значения, такие как число 0.  0 будет отображён, если массив props.messages пуст (1). Чтобы исправить это, убедитесь что выражение перед оператором && всегда является boolean (2). И наоборот, если вы хотите, чтобы такие значения как false, true, null или undefined отрисовались, то сначала вы должны преобразовать их в строку (3):' },
      {
        c: `// (1)
<div>{props.messages.length && <MessageList messages={props.messages} />}</div>
// (2)
<div>{props.messages.length > 0 && <MessageList messages={props.messages} />} </div>
// (3)
<div>Моя переменная JavaScript - {String(myVariable)}.</div>`},
    ]
  },
  {
    path: 'state', title: 'State', content: [
      { p: 'React предоставляет декларативный способ управления пользовательским интерфейсом. Вместо непосредственного управления отдельными частями пользовательского интерфейса вы описываете различные состояния (стейты, state), в которых может находиться ваш компонент, и переключаетесь между ними в ответ на действия пользователя.' },
      { w: 'Состояния, в отличии от пропсов, можно изменять. При изменении состояния изменения произойдут во всех местах, где это состояние используется. Технически это достигается путем перендерования всего компонента при изменении какого-либо состояния.' },
      { p: 'Состояния можно использвать как в классовых, так и в функциональных компонентах. Для работы с состоянием в классовом компоненте используется объекст state. В функциональных же компонентах для управления состоянием применяется другая архитектура, основанная на хуках.' },
      { p: 'Объект state описывает внутреннее состояние компонента, он похож на props за тем исключением, что состояние определяется внутри компонента и доступно только из компонента. Если props представляет входные данные, которые передаются в компонент извне, то состояние хранит такие объекты, которые создаются в компоненте и полностью зависят от компонента.' },
      { w: 'Значения из state должны использоваться при рендеринге. Если какой-то объект не используется в рендерниге компонента, то нет смысла сохранять его в state.' },
      { h: 'Объявление состояния' },
      { p: 'Стейт устанавливается в конструкторе класса, либо как свойство класса:' },
      {
        c: `class Hello extends React.Component {
  constructor(props) {
      super(props);
      this.state = {welcome: "Добро пожаловать на сайт!"};
  }
  render() {
      return <h1>{this.state.welcome}</h1>;
  }
}

ReactDOM.createRoot(
  document.getElementById("app")
)
.render(
  <Hello />
);

//или 

class Hello extends React.Component {
  state = {welcome: "Добро пожаловать на сайт!"}
  render() {
      return <h1>{this.state.welcome}</h1>;
  }
}
//...`},
      { p: 'Для функциональных компонентов используется хук useState. Хук — это специальная функция, которая позволяет «подцепиться» к возможностям React.' },
      {
        c: `import React, { useState } from 'react';

function Example() {
  // Объявление новой переменной состояния «count»
  const [count, setCount] = useState(0);
  //...
}`},
      { p: 'Вызов useState объявляет переменную состояния, в качестве аргумента принимает единственный аргумент - начальное состояние. В отличие от случая с классами, состояние может быть и не объектом, а строкой или числом. Возвращает пару значений: текущее состояние и функцию, обновляющую состояние. Поэтому мы пишем const [count, setCount] = useState(). Это похоже на this.state.count и this.setState в классах, с той лишь разницей, что сейчас мы принимаем их сразу в паре.' },
      { w: 'Если нам нужно было бы хранить два разных значения в состоянии, то пришлось бы вызвать useState() дважды.' },
      {
        c: `const [count, setCount] = useState(0);
const [price, setPrice] = useState(0);`},
      { h: 'Обновление состояния' },
      { p: 'Для обновления состояния вызывается функция setState():' },
      { c: `this.setState({welcome: "Привет React"});` },
      { p: 'Изменение состояния вызовет повторный рендеринг компонента, в соответствии с чем веб-страница будет обновлена. В то же время не стоит изменять свойства состояния напрямую. При этом нам не обязательно обновлять все его значения. В процессе работы программы мы можем обновить только некоторые свойства. Тогда необновленные свойства будут сохранять старые значения. Пример обновления состояния:' },
      {
        c: `// так делать нельзя
this.state.welcome = "Привет React"; 
// правильное изменение состояния 
class ClickButton extends React.Component {
  constructor(props) {
      super(props);
      this.state = {class: "off", label: "Нажми"}; 
      this.press = this.press.bind(this);
  }
  press(){
      let className = (this.state.class==="off")?"on":"off";
      this.setState({class: className});
  }
  render() {
      return <button onClick={this.press} className={this.state.class}>{this.state.label}</button>;
  }
}`},
      { p: 'Для изменения состояния в случае использования хука useState() используется функция полученная при вызове хука:' },
      {
        c: `const [count, setCount] = useState(0);
//...
<button onClick={() => setCount(count + 1)}>
  Нажми на меня
</button>`},
      { h: 'Асинхронное обновление' },
      { p: 'При наличии нескольких вызовов setState() React может объединять их в один общий пакет обновлений для увеличения производительности. Так как объекты this.props и this.state могут обновляться асинхронно, не стоит полагаться на значения этих объектов для вычисления состояния. Например:' },
      {
        c: `this.setState({
  counter: this.state.counter + this.props.increment,
});`},
      { p: 'Для обновления надо использовать другую версию функции setState(), которая в качестве параметра принимает функцию. Данная функция имеет два параметра: предыдущее состояние объекта state и объект props на момент применения обновления:' },
      {
        c: `this.setState(function(prevState, props) {
  return {
      counter: prevState.counter + props.increment
  };
});
//например, два последовательных вызова setState()
// увеличит значение только на 1
press(){ 
  this.setState({counter: this.state.counter + parseInt(this.props.increment)});
  this.setState({counter: this.state.counter + parseInt(this.props.increment)});
}
// теперь значение увеличивается на 2
incrementCounter(prevState, props) {
  return {
    counter: prevState.counter + parseInt(props.increment)
  };
}
press(){
  this.setState(this.incrementCounter);
  this.setState(this.incrementCounter);
}

`},
      { p: 'Это равносильно и для useState():' },
      {
        c: `function handleClick() {
  setAge(age + 1); // setAge(42 + 1)
  setAge(age + 1); // setAge(42 + 1)
  setAge(age + 1); // setAge(42 + 1)
}

function handleClick() {
  setAge(a => a + 1); // setAge(42 => 43)
  setAge(a => a + 1); // setAge(43 => 44)
  setAge(a => a + 1); // setAge(44 => 45)
}`},
    ]
  },
  {
    path: 'lifecycle', title: 'Lifecycle', content: [
      { p: 'В процессе работы компонент проходит через ряд этапов жизненного цикла. На каждом из этапов вызывается определенная функция, в которой мы можем определить какие-либо действия.' },
      { p: 'У каждого компонента в React есть три основные фазы:' },
      { l: ['монтирование', 'обновление', 'размонтирование'] },
      { h: 'Монтирование' },
      { p: 'Монтирование означает размещение элементов в DOM. React имеет четыре встроенных метода, которые вызываются в этом порядке при монтировании компонента:' },
      { l: ['constructor()', 'getDerivedStateFromProps()', 'render()', 'componentDidMount()'] },
      { w: 'Метод render() является обязательным  и является методом, который фактически выводит HTML в DOM. Он всегда будет вызываться, остальные методы являются необязательными и будут вызываться, если вы их определите.' },
      { p: 'Метод constructor() вызывается прежде всего, когда компонент инициируется, и это естественное место для установки начальных state и других начальных значений. Метод constructor() вызывается с props, в качестве аргументов, и вы всегда должны начинать с вызова super(props), это инициирует метод конструктора родителя и позволяет компоненту наследовать методы от своего родителя ( React.Component).' },
      {
        c: `class Header extends React.Component {
  constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
  }
  render() {
      return (
          <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));`},
      { p: 'Метод getDerivedStateFromProps()вызывается непосредственно перед рендерингом элемента(ов) в DOM. Это естественное место для установки stateобъекта на основе начального props. Он принимает stateв качестве аргумента и возвращает объект с изменениями в файле state. В приведенном ниже примере предпочтительным цветом является «красный», но метод getDerivedStateFromProps()обновляет любимый цвет на основе favcolатрибута:' },
      {
        c: `class Header extends React.Component {
  constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
  }
  static getDerivedStateFromProps(props, state) {
      return {favoritecolor: props.favcol };
  }
  render() {
      return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      );
  }
}

ReactDOM.render(<Header favcol="yellow"/>, document.getElementById('root'));`},
      { p: 'Метод componentDidMount()вызывается после рендеринга компонента. Здесь вы запускаете операторы, требующие, чтобы компонент уже был помещен в DOM.' },
      {
        c: `class Header extends React.Component {
  constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
      setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
      }, 1000)
  }
  render() {
      return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));`},
      { h: 'Обновление' },
      { p: 'Следующим этапом жизненного цикла является обновление компонента. Компонент обновляется всякий раз, когда происходит изменение компонента state или  props. React имеет пять встроенных методов, которые вызываются в указанном порядке при обновлении компонента:' },
      { l: ['getDerivedStateFromProps()', 'shouldComponentUpdate()', 'render()', 'getSnapshotBeforeUpdate()', 'componentDidUpdate()'] },
      { p: 'Также при обновлениях getDerivedStateFromProps вызывается метод. Это первый метод, который вызывается при обновлении компонента. Это по-прежнему естественное место для установки state объекта на основе исходных реквизитов. В приведенном ниже примере есть кнопка, которая изменяет любимый цвет на синий, но поскольку вызывается метод getDerivedStateFromProps(), который обновляет состояние цветом из атрибута favcol, любимый цвет по-прежнему отображается желтым:' },
      {
        c: `class Header extends React.Component {
  constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
  }
  static getDerivedStateFromProps(props, state) {
      return {favoritecolor: props.favcol };
  }
  changeColor = () => {
      this.setState({favoritecolor: "blue"});
  }
  render() {
      return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
      );
  }
}

ReactDOM.render(<Header favcol="yellow"/>, document.getElementById('root'))`},
      { p: 'В методе shouldComponentUpdate() вы можете вернуть логическое значение, которое указывает, должен ли React продолжать рендеринг или нет. Значение по умолчанию равно true. В приведенном ниже примере показано, что происходит, когда shouldComponentUpdate()метод возвращает значение false:' },
      {
        c: `class Header extends React.Component {
  constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
  }
  shouldComponentUpdate() {
      return false; // замени на true и сравни результат
  }
  changeColor = () => {
      this.setState({favoritecolor: "blue"});
  }
  render() {
      return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
      );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));`},
      { p: 'Метод render(), конечно, вызывается, когда компонент обновляется, он должен повторно отображать HTML в DOM с новыми изменениями.' },
      {
        p: `В методе getSnapshotBeforeUpdate() у вас есть доступ к props и state до обновления, а это означает, что даже после обновления вы можете проверить, какие значения были до обновления.

              Если метод getSnapshotBeforeUpdate() присутствует, вы также должны включить метод componentDidUpdate(), иначе вы получите ошибку.
              
              Пример ниже может показаться сложным, но все, что он делает, это следующее:
              
              Когда компонент монтируется , он отображается любимым цветом "красный".
              
              Когда компонент смонтирован, таймер меняет состояние, и через одну секунду любимый цвет становится «желтым».
              
              Это действие запускает фазу обновления, и поскольку у этого компонента есть метод getSnapshotBeforeUpdate(), этот метод выполняется и записывает сообщение в пустой элемент DIV1.
              
              Затем метод componentDidUpdate() выполняется и записывает сообщение в пустой элемент DIV2:`},
      {
        c: `class Header extends React.Component {
  constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
      setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
      }, 1000)
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
      document.getElementById("div1").innerHTML =
      "Before the update, the favorite was " + prevState.favoritecolor;
  }
  componentDidUpdate() {
      document.getElementById("div2").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
      return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <div id="div1"></div>
      <div id="div2"></div>
      </div>
      );
  }
}`},
      {
        p: `Метод componentDidUpdate вызывается после обновления компонента в DOM.

            Пример ниже может показаться сложным, но все, что он делает, это следующее:
            
            Когда компонент монтируется , он отображается любимым цветом "красный".
            
            Когда компонент смонтирован, таймер меняет состояние, и цвет становится «желтым».
            
            Это действие запускает фазу обновления, и поскольку у этого компонента есть метод componentDidUpdate, этот метод выполняется и записывает сообщение в пустой элемент DIV:`},
      {
        c: `class Header extends React.Component {
  constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
      setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
      }, 1000)
  }
  componentDidUpdate() {
      document.getElementById("mydiv").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
      return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <div id="mydiv"></div>
      </div>
      );
  }
}`},
      { h: 'Размонтирование' },
      {
        p: `Следующий этап жизненного цикла — это когда компонент удаляется из DOM или размонтируется , как любит это называть React.

          В React есть только один встроенный метод, который вызывается при размонтировании компонента:`},
      { l: ['componentWillUnmount'] },
      { p: 'Метод componentWillUnmount вызывается, когда компонент собирается удалить из DOM.' },
      {
        c: `class Container extends React.Component {
  constructor(props) {
      super(props);
      this.state = {show: true};
  }
  delHeader = () => {
      this.setState({show: false});
  }
  render() {
      let myheader;
      if (this.state.show) {
      myheader = <Child />;
      };
      return (
      <div>
      {myheader}
      <button type="button" onClick={this.delHeader}>Delete Header</button>
      </div>
      );
  }
  }
  
  class Child extends React.Component {
  componentWillUnmount() {
      alert("The component named Header is about to be unmounted.");
  }
  render() {
      return (
      <h1>Hello World!</h1>
      );
  }
}`}
    ]
  },
  {
    path: 'events', title: 'Events', content: [
      {
        p: `
              Как и события HTML DOM, React может выполнять действия на основе пользовательских событий.
              
              React имеет те же события, что и HTML: щелчок, изменение, наведение мыши и т. д.`},
      {
        p: `События React записываются в синтаксисе camelCase,                
              обработчики событий React записываются внутри фигурных скобок:`},
      {
        c: `//React
<button onClick={shoot}>Take the Shot!</button>
//HTML
<button onclick="shoot()">Take the Shot!</button>
`},
      { component: <div className="flex flex-row justify-center content-center"><button className="button w-30 rounded-md p-3 outline-2 outline outline-activelink hover:text-activelink" onClick={() => alert('shoot')}>Take the Shot!</button></div> },
      {
        c: `function Football() {
  const shoot = () => {
      alert("Great Shot!");
  }
  
  return (
      <button onClick={shoot}>Take the shot!</button>
  );
}`},
      { w: 'В React нельзя предотвратить обработчик события по умолчанию, вернув false. Нужно явно вызвать preventDefault.' },
      {
        c: `function Form() {
  function handleSubmit(e) {
      e.preventDefault();
      console.log('Отправлена форма.');
  }
  
  return (
      <form onSubmit={handleSubmit}>
      <button type="submit">Отправить</button>
      </form>
  );
}`},
      { p: `Чтобы передать аргумент обработчику событий, используйте стрелочную функцию.` },
      {
        c: `function Football() {
  const shoot = (a) => {
      alert(a);
  }
  
  return (
      <button onClick={() => shoot("Goal!")}>Take the shot!</button>
  );
}`},
      { p: 'Обработчики событий имеют доступ к событию React, вызвавшему функцию. В нашем примере это событие «щелчок».' },
      {
        c: `function Football() {
  const shoot = (a, b) => {
      alert(b.type); // event, который вызвал функцию - click
  }
  
  return (
      <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
  );
}`},
      { p: `Обработчики событий получают экземпляр SyntheticEvent, это кроссбраузерная обёртка над нативным экземпляром события. У неё такой же интерфейс, как и у нативного события, включая методы stopPropagation() и preventDefault(). Эта обёртка помогает событиям работать одинаково во всех браузерах.` },
      { p: `Если вам всё-таки нужно получить нативное браузерное событие, обратитесь к атрибуту nativeEvent. Синтетические события отличаются от нативных событий браузера и непосредственно не связаны с ними. ` },
      { p: 'React нормализует события так, чтобы они содержали одинаковые свойства во всех браузерах. React поддерживает следующие события:' },
      {
        l: ["События буфера обмена",
          "Композиционные события", "События клавиатуры",
          "События фокуса",
          "События формы",
          "Общие события",
          "События мыши",
          "События курсора",
          "События выбора",
          "Сенсорные события",
          "События UI",
          "События колёсика мыши",
          "События медиа-элементов",
          "События изображений",
          "События анимаций",
          "События переходов",
          "Другие события"]
      },
      {
        details: <details className="px-20"><summary>Все события</summary><ul>{[
          "onKeyDown",
          "onKeyPress",
          "onKeyUp",
          "onFocus",
          "onBlur",
          "onChange",
          "onInput",
          "onInvalid",
          "onReset",
          "onSubmit",
          "onError",
          "onLoad",
          "onClick",
          "onContextMenu",
          "onDoubleClick",
          "onDrag",
          "onDragEnd",
          "onDragEnter",
          "onDragExit",
          "onDragLeave",
          "onDragOver",
          "onDragStart",
          "onDrop",
          "onMouseDown",
          "onMouseEnter",
          "onMouseLeave",
          "onMouseMove",
          "onMouseOut",
          "onMouseOver",
          "onMouseUp",
          "onPointerDown",
          "onPointerMove",
          "onPointerUp",
          "onPointerCancel",
          "onGotPointerCapture",
          "onLostPointerCapture",
          "onPointerEnter",
          "onPointerLeave",
          "onPointerOver",
          "onPointerOut",
          "onSelect",
          "onTouchCancel",
          "onTouchEnd",
          "onTouchMove",
          "onTouchStart",
          "onScroll",
          "onWheel",
          "onAbort",
          "onCanPlay",
          "onCanPlayThrough",
          "onDurationChange",
          "onEmptied",
          "onEncrypted",
          "onEnded",
          "onError",
          "onLoadedData",
          "onLoadedMetadata",
          "onLoadStart",
          "onPause",
          "onPlay",
          "onPlaying",
          "onProgress",
          "onRateChange",
          "onSeeked",
          "onSeeking",
          "onStalled",
          "onSuspend",
          "onTimeUpdate",
          "onVolumeChange",
          "onWaiting",
          "onLoad",
          "onError",
          "onAnimationStart",
          "onAnimationEnd",
          "onAnimationIteration",
          "onTransitionEnd",
          "onToggle"
        ].map((e, i) => <li key={i}>{e}</li>)}</ul></details>
      }
    ]
  },
  {
    path: 'key', title: 'Key', content: [
      { p: 'Как правило, вы будете рендерить списки внутри какого-нибудь компонента.' },
      { p: `Если запустить рендер элементов массива, то мы увидим предупреждение о том, что у каждого элемента массива должен быть ключ (key). «Ключ» — это специальный строковый атрибут, который нужно указывать при создании списка элементов.` },
      {
        c: `function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
      <li key={number.toString()}>{number}</li>
  );
  return (
      <ul>{listItems}</ul>
  );
}`},
      { p: 'Ключи помогают React определять, какие элементы были изменены, добавлены или удалены. Их необходимо указывать, чтобы React мог сопоставлять элементы массива с течением времени.' },
      { p: 'Лучший способ выбрать ключ — это использовать строку, которая будет явно отличать элемент списка от его соседей. Чаще всего вы будете использовать ID из ваших данных как ключи.' },
      { p: 'Когда у вас нет заданных ID для списка, то в крайнем случае можно использовать индекс элемента как ключ.' },
      { w: 'Не рекомендуется использовать индексы как ключи, если порядок элементов может поменяться. Это негативно скажется на производительности и может вызвать проблемы с состоянием компонента' },
      { p: 'Ключи нужно определять непосредственно внутри массивов. Например, если вы извлекаете компонент ListItem, то нужно указывать ключ для <ListItem /> в массиве, а не в элементе <li> внутри самого ListItem.' },
      {
        c: `function ListItem(props) {
  // Правильно! Не нужно определять здесь ключ:
  return <li>{props.value}</li>;
}
  
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
      // Правильно! Ключ нужно определять внутри массива:
      <ListItem key={number.toString()} value={number} />
  );
  return (
      <ul>
      {listItems}
      </ul>
  );
}`},
      { w: 'Ключи внутри массива должны быть уникальными только среди своих соседних элементов. Им не нужно быть уникальными глобально. Можно использовать один и тот же ключ в двух разных массивах.' },
      { p: 'Ключи служат подсказками для React, но они никогда не передаются в ваши компоненты. Если в компоненте нужно то же самое значение, то передайте его явно через проп с другим именем.' },
      { p: 'JSX позволяет встроить любое выражение в фигурные скобки, так что мы можем включить результат выполнения map():' },
      {
        c: `function NumberList(props) {
  const numbers = props.numbers;
  return (
      <ul>
      {numbers.map((number) =>
          <ListItem key={number.toString()}
                  value={number} />
      )}
      </ul>
  );
}`}



    ]
  },
  {
    path: 'refs', title: 'Refs', content: [
      { p: 'Рефы дают возможность получить доступ к DOM-узлам или React-элементам, созданным в рендер-методе.' },
      { p: 'В обычном потоке данных React родительские компоненты могут взаимодействовать с дочерними только через пропсы. Чтобы модифицировать потомка, вы должны заново отрендерить его с новыми пропсами. Тем не менее, могут возникать ситуации, когда вам требуется императивно изменить дочерний элемент, обойдя обычный поток данных. Подлежащий изменениям дочерний элемент может быть как React-компонентом, так и DOM-элементом. React предоставляет лазейку для обоих случаев.' },
      { p: 'Ситуации, в которых использование рефов является оправданным:' },
      {
        l: ['Управление фокусом, выделение текста или воспроизведение медиа.',
          'Императивный вызов анимаций.',
          'Интеграция со сторонними DOM-библиотеками.'
        ]
      },
      { w: 'Избегайте использования рефов в ситуациях, когда задачу можно решить декларативным способом.' },
      { p: 'Рефы создаются с помощью React.createRef() и прикрепляются к React-элементам через ref атрибут. Обычно рефы присваиваются свойству экземпляра класса в конструкторе, чтобы на них можно было ссылаться из любой части компонента.' },
      {
        c: `class MyComponent extends React.Component {
  constructor(props) {
      super(props);
      this.myRef = React.createRef();
  }
  render() {
      return <div ref={this.myRef} />;
  }
}
`},
      { p: 'Когда реф передаётся элементу в методе render, ссылка на данный узел доступна через свойство рефа current.' },
      { c: 'const node = this.myRef.current;' },
      { p: 'Значение рефа отличается в зависимости от типа узла:        ' },
      {
        l: ['Когда атрибут ref используется с HTML-элементом, свойство current созданного рефа в конструкторе с помощью React.createRef() получает соответствующий DOM-элемент.',
          'Когда атрибут ref используется с классовым компонентом, свойство current объекта-рефа получает экземпляр смонтированного компонента.',
          'Нельзя использовать ref атрибут с функциональными компонентами, потому что для них не создаётся экземпляров.'
        ]
      },
      { p: 'В функциональных компонентах необходимо использовать хук useRef().' },
      { c: `const ref = useRef(initialValue)` },
      { p: 'Параметры' },
      { l: ['initialValue: значение, которое вы хотите, чтобы свойство объекта ref current было изначально. Это может быть значение любого типа. Этот аргумент игнорируется после начального рендеринга.'] },
      { p: 'useRef возвращает объект с одним свойством: current: Изначально установленное в initialValue. Позже вы можете установить его на что-то другое. Если вы передадите объект ref в React как ref атрибут узла JSX, React установит его current свойство. При следующих рендерах useRefбудет возвращаться тот же объект' },
      { w: 'Не записывайте и не читайте ref.current во время рендеринга. Вместо этого вы можете читать или писать ссылки из обработчиков событий или эффектов' },
      {
        c: `import { useRef } from 'react';
export default function Form() {
  const inputRef = useRef(null);
  function handleClick() {
      inputRef.current.focus();
  }
  return (
  <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
  </>
  );
}`}

    ]
  },
  {
    path: 'async', title: 'Асинхронные запросы', content: [
      { p: 'Асинхронные запросы нужны для работы с API. Получение результата может занять какое-то время. Запрос должен выполняться в фоновом режиме, чтобы не блокировать работу приложения.' },
      { p: 'Работы с асинхронными запросами в React обычно выполняется с использованием хука useEffect(), для функционального и с помощью методов жизненного цикла, для классового компонентов' },
      { p: 'Пример с функциональным компонентом:' },
      {
        c: `import axios from "axios"; // библиотека для работы с http запросами, можно обойтись без нее стандартным fetch()
function Ax() {
  const [data, setData] = useState([]);
  useEffect(() => {
      (async () => {
          const resp = await axios.get('https://jsonplaceholder.typicode.com/todos');
          setData(resp.data)
      })()
  },[])
  return (
      <ul>
          {data.map(e => <li style={{listStyle: 'none', textAlign: 'start', margin: '10px 0'}} key={e.id}>{e.title} {e.checked ? '✔️' : '❌'}</li>)}
      </ul>
  )
}
      `},
      { p: 'Для классового компонента с использованием методов жизненного цикла:' },
      {
        c: `class CardsList extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          wines: [],
      isGetError: false
      };
      this.getData = this.getData.bind(this);
  }
  
  async getData() {
      try {
          const resp = await axios.get("https://api.sampleapis.com/wines/" + this.props.sort);
          this.setState(() => ({ wines: resp.data }));
      } 
      catch (err) {
          this.setState({ isGetError: true });
      }
  }
  
  componentDidMount() {
      this.getData();
  }
  
  componentDidUpdate(prevProps) {
      prevProps.sort !== this.props.sort && this.getData();
  }
  
  render() {
      const { wines, isGetError } = this.state;
      const winesList = wines.map((wine) => <Card key={wine.id} {...wine} />);
      return (
      <>
          {isGetError ? (
          <h1 className=" text-5xl text-center pt-10">ERROR...</h1>
          ) : (
          <div className="grid grid-cols-1 gap-5 mx-auto mt-10 w-3/4 sm:grid-cols-2 lg:grid-cols-3">
              {winesList}
          </div>
          )}
      </>
      );
  }
}`}
    ]
  },
  {
    path: 'virtual-dom', title: 'Virtual DOM', content: [
      { p: 'Виртуальный DOM (VDOM) — это концепция программирования, в которой идеальное или «виртуальное» представление пользовательского интерфейса хранится в памяти и синхронизируется с «настоящим» DOM при помощи библиотеки, такой как ReactDOM. Этот процесс называется согласованием.' },
      { p: 'Такой подход и делает API React декларативным: вы указываете, в каком состоянии должен находиться пользовательский интерфейс, а React добивается, чтобы DOM соответствовал этому состоянию. Это абстрагирует манипуляции с атрибутами, обработку событий и ручное обновление DOM, которые в противном случае пришлось бы использовать при разработке приложения.' },
      { p: 'Поскольку «виртуальный DOM» — это скорее паттерн, чем конкретная технология, этим термином иногда обозначают разные понятия. В мире React «виртуальный DOM» обычно ассоциируется с React-элементами, поскольку они являются объектами, представляющими пользовательский интерфейс. Тем не менее, React также использует внутренние объекты, называемые «волокнами» (fibers), чтобы хранить дополнительную информацию о дереве компонентов. Их также можно считать частью реализации «виртуального DOM» в React.' },
      { p: 'Теневой DOM (Shadow DOM) — это браузерная технология, предназначенная в основном для определения области видимости переменных и CSS в веб-компонентах. Виртуальный DOM — это концепция, реализованная библиотеками в JavaScript поверх API браузера.' },
    ]
  },
  {
    path: 'fragment', title: 'Fragment', content: [
      { p: 'Возврат нескольких элементов из компонента является распространённой практикой в React. Фрагменты позволяют формировать список дочерних элементов, не создавая лишних узлов в DOM.' },
      {
        c: `render() {
  return (
      <React.Fragment>
          <ChildA />
          <ChildB />
          <ChildC />
      </React.Fragment>
  );
}
//сокращенная форма
return (
  <>
      <ChildA />
      //...
  </>
);`},
      { w: 'Можно использовать <></> так же, как используется любой другой элемент. Однако такая запись не поддерживает ключи или атрибуты.' },
      { p: 'Фрагменты, объявленные с помощью <React.Fragment>, могут иметь ключи. Например, их можно использовать при создании списка определений, преобразовав коллекцию в массив фрагментов.' },
      { w: 'key — это единственный атрибут, допустимый у Fragment.' }
    ]
  },
  {
    path: 'react-memo', title: 'React.Memo', content: [
      { p: 'Memo позволяет пропустить повторный рендеринг компонента, если его свойства не изменились.' },
      { p: 'Оберните компонент, memo чтобы получить "запомненную" версию этого компонента. Эта запомненная версия вашего компонента обычно не будет повторно рендерится при повторном рендере его родительского компонента, если его реквизиты не изменились. Но React все еще может перерендерить его: мемоизация — это оптимизация производительности, а не гарантия.' },
      {
        c: `import { memo } from 'react';
  const SomeComponent = memo(function SomeComponent(props) { //memo(Component, arePropsEqual?) 
  // ...
});`},
      { p: 'Параметры' },
      {
        l: [`Component: Компонент, который вы хотите запомнить. Memo не изменяет этот компонент, а вместо этого возвращает новый, запомненный компонент. Допускается любой допустимый компонент React, включая функции и компоненты.`,
          `Необязательный arePropsEqual : функция, которая принимает два аргумента: предыдущие реквизиты компонента и его новые реквизиты. Она должна возвращать, true если старые и новые реквизиты равны: то есть, если компонент будет отображать один и тот же вывод и вести себя с новыми реквизитами так же, как и со старыми. В противном случае она должен вернуть false. Обычно вы не указываете эту функцию. По умолчанию React сравнивает каждое свойство с Object.is().`]
      },
      { p: 'Чтобы запомнить компонент, оберните его memo и используйте значение, которое он возвращает, вместо исходного компонента:' },
      {
        c: `const Greeting = memo(function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
});

export default Greeting;`},
      { p: 'Компонент React всегда должен иметь чистую логику рендеринга. Это означает, что он должен возвращать тот же результат, если его реквизиты, состояние и контекст не изменились. Используя memo, вы сообщаете React, что ваш компонент соответствует этому требованию, поэтому React не нужно повторно отображать, пока его реквизиты не изменились. Даже с memo, ваш компонент будет перерисовываться, если изменится его собственное состояние или контекст, который он использует.' },
      { w: `Оптимизация с помощью memo имеет смысл только в том случае, если ваш компонент часто повторно рендерится с одними и теми же реквизитами, а его логика повторного рендеринга требует больших затрат. Если нет заметной задержки при повторном рендеринге вашего компонента, в memo, в этом случае, нет необходимости.` }
    ]
  },
  {
    path: 'useEffect', title: 'useEffect', content: [
      { p: 'useEffect — это React Hook, который позволяет синхронизировать компонент с внешней системой. Это включает в себя работу с сетью, DOM браузера, анимацию, виджеты, написанные с использованием другой библиотеки пользовательского интерфейса, и другой код, не относящийся к React.' },
      { h: 'useEffect(setup, dependencies?)' },
      { p: 'Параметры' },
      {
        l: [`setup: Функция с логикой вашего эффекта. Ваша функция настройки также может дополнительно возвращать функцию очистки . Когда ваш компонент будет добавлен в DOM, React запустит вашу функцию настройки. После каждого повторного рендеринга с измененными зависимостями React сначала запускает функцию очистки (если вы ее предоставили) со старыми значениями, а затем запускает функцию настройки с новыми значениями. После того, как ваш компонент будет удален из DOM, React запустит вашу функцию очистки.`,
          `необязательный dependencies : список всех реактивных значений, на которые ссылается setup код. Реактивные значения включают реквизиты, состояние и все переменные и функции, объявленные непосредственно внутри тела вашего компонента. Список зависимостей должен иметь постоянное количество элементов и быть встроенным, как [dep1, dep2, dep3]. React будет сравнивать каждую зависимость с ее предыдущим значением, используя Object.is сравнение. Если вы опустите этот аргумент, ваш эффект будет повторно запускаться после каждого повторного рендеринга компонента.`
        ]
      },
      { w: 'useEffect является хуком, поэтому вы можете вызывать его только на верхнем уровне вашего компонента или ваших собственных хуков. Вы не можете вызывать его внутри циклов или условий. Если вам это нужно, извлеките новый компонент и переместите в него состояние.' },
      { h: 'Подключение' },
      {
        c: `import { useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => { // функция (код установки)
      const connection = createConnection(serverUrl, roomId);
      connection.connect();
      return () => { // код очистки
          connection.disconnect();
      };
  }, [serverUrl, roomId]); // зависимости
  // ...
}`},
      { p: 'React вызывает ваши функции настройки и очистки всякий раз, когда это необходимо, что может происходить несколько раз:' },
      {
        l: [`Код установки запускается, когда ваш компонент добавляется на страницу (монтируется) .`,
          `После каждого повторного рендеринга компонента, где изменились зависимости :
          1) код очистки работает со старыми реквизитами и состоянием.
          2) код установки запускается с новыми реквизитами и состоянием.`,
          `Код очистки запускается в последний раз после удаления вашего компонента со страницы (размонтирования).`
        ]
      },
      { h: 'Указание реактивных зависимостей' },
      { p: 'Реактивные значения включают свойства и все переменные и функции, объявленные непосредственно внутри вашего компонента. Если код вашего Эффекта не использует никаких реактивных значений, его список зависимостей должен быть пустым ([]):' },
      { w: 'Эффект с пустыми зависимостями не запускается повторно, когда какие-либо реквизиты или состояние вашего компонента изменяются.' },
      { h: 'Обновление состояния на основе предыдущего состояния эффекта' },
      { p: 'Если вы хотите обновить состояние на основе предыдущего состояния Эффекта, вы можете столкнуться с проблемой:' },
      {
        c: `function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
      const intervalId = setInterval(() => {
      setCount(count + 1); // хотим увеличивать count каждую секунду
      }, 1000)
      return () => clearInterval(intervalId);
  }, [count]); // 🚩 ... указание count как зависимости всегда очищает интервал
  // ...
}`},
      { p: 'Чтобы исправить это, используйте стрелочную функцию (c => c + 1) в функции обновления состояния setCount :' },
      {
        c: `useEffect(() => {
  const intervalId = setInterval(() => {
      setCount(c => c + 1); // ✅ теперь обновляется
  }, 1000);
      return () => clearInterval(intervalId);
}, []); // ✅ count больше не зависимость`},
      { w: 'Избегайте использования функции, созданной во время рендеринга, в качестве зависимости. Вместо этого объявите её внутри эффекта:' },
      {
        c: `useEffect(() => {
  function createOptions() { 
      return {
      serverUrl: serverUrl,
      roomId: roomId
      };
  }
  const options = createOptions();
  const connection = createConnection(options);
  connection.connect();
  return () => connection.disconnect();
}, [roomId]); // ✅ функция не является зависимостью

// так не надо
function createOptions() { // 🚩 функция будет создаваться при каждом рендере
  return {
    serverUrl: serverUrl,
    roomId: roomId
  };
}
useEffect(() => {
  const options = createOptions(); // используем внутри эффекта
  const connection = createConnection();
  connection.connect();
  return () => connection.disconnect();
}, [createOptions]); // 🚩 функция является зависимостью`}
    ]
  },
  {
    path: 'useContext', title: 'useContext', content: [
      { p: 'useContext — это React Hook, который позволяет вам читать и подписываться на контекст вашего компонента.' },
      { h: 'useContext(SomeContext)' },
      { p: 'Параметры' },
      { l: ['SomeContext: контекст, который вы ранее создали с помощью createContext. Сам контекст не содержит информацию, он представляет только ту информацию, которую вы можете предоставить или прочитать из компонентов.'] },
      {
        c: `import { useContext } from 'react';

function MyComponent() {
  const theme = useContext(ThemeContext);
// ...`},
      { p: 'useContext возвращает значение контекста для вызывающего компонента. Он определяется как value переданный ближайшему SomeContext.Provider выше вызывающего компонента в дереве. Если такого провайдера нет, то возвращаемое значение будет тем, defaultValue которое вы определили в createContext для этого контекста. Возвращаемое значение всегда актуально. React автоматически перерисовывает компоненты, которые считывают некоторый контекст, если он изменяется.' },
      { w: 'Неважно, сколько уровней компонентов находится между провайдером и потребителем контекста. UseContext() всегда ищет ближайшего провайдера над компонентом, который его вызывает. Он ищет вверх и не рассматривает провайдеров в компоненте, из которого вы вызываете useContext().' },
      { p: 'Пример использования контекста в этом проекте:' },
      {
        c: `//Создадим компонент с нашим контекстом ThemeContext.js
import { useState, useEffect, createContext } from 'react'
const Context = createContext(); //создадим контекст без значения по умолчанию
const ThemeContext = (props) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark'); // читаем сохранненую тему из localStorage, если её нет используем темную тему
  useEffect(()=>{
      localStorage.setItem('theme',theme); // записываем информацию о выбранной теме в localStorage
  },[theme])
  const toggleTheme = () => {
      setTheme((theme)=>theme === 'dark' ? 'light' : 'dark');
  }
  const ctx = {
      theme,
      toggleTheme
  }
  return (
      <Context.Provider value={ctx}>{props.children}</Context.Provider> // возвращаем обертку с контекстом для наших компонентов
  )
}
export {ThemeContext, Context}; // экспортируем компонент и контекст

//оборачиваем наши компоненты в index.js в обертку с контекстом для дальнейшего использования
import {ThemeContext} from './components/ThemeContext'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <ThemeContext>
    //...
  </ThemeContext>
</React.StrictMode>
);
// Используем наш контекст в компонентах
// NavigationLinks.js
import { Context } from "./ThemeContext"; // импорт контекста
const NavigationLinks = () => {
  const {theme} = useContext(Context);
  return (
      <nav className={"navigation " + theme }> // используем полученный контекст для выбора класса css
          /...
      </nav>
  )
}
`},
      { h: 'API' },
      { c: `const MyContext = React.createContext(defaultValue)` },
      { p: `Создаёт объект Context. Когда React рендерит компонент, который подписан на этот объект, React получит текущее значение контекста из ближайшего подходящего Provider выше в дереве компонентов.` },
      { p: `Аргумент defaultValue используется только в том случае, если для компонента нет подходящего Provider выше в дереве. Значение по умолчанию может быть полезно для тестирования компонентов в изоляции без необходимости оборачивать их. Обратите внимание: если передать undefined как значение Provider, компоненты, использующие этот контекст, не будут использовать defaultValue. ` },
      { c: `<MyContext.Provider value={/* некоторое значение */}>` },
      { p: 'Каждый объект Context используется вместе с Provider компонентом, который позволяет дочерним компонентам, использующим этот контекст, подписаться на его изменения.' },
      { p: 'Компонент Provider принимает проп value, который будет передан во все компоненты, использующие этот контекст и являющиеся потомками этого компонента Provider. Один Provider может быть связан с несколькими компонентами, потребляющими контекст. Так же компоненты Provider могут быть вложены друг в друга, переопределяя значение контекста глубже в дереве.' },
      { p: 'Все потребители, которые являются потомками Provider, будут повторно рендериться, как только проп value у Provider изменится. Потребитель (включая .contextType и useContext) перерендерится при изменении контекста, даже если его родитель, не использующий данный контекст, блокирует повторные рендеры с помощью shouldComponentUpdate.' },
      { h: 'Использование в классовых компонентах' },
      {
        c: `class MyClass extends React.Component {
componentDidMount() {
  let value = this.context;
  /* выполнить побочный эффект на этапе монтирования, используя значение MyContext */
}
componentDidUpdate() {
  let value = this.context;
  /* ... */
}
componentWillUnmount() {
  let value = this.context;
  /* ... */
}
render() {
  let value = this.context;
  /* отрендерить что-то, используя значение MyContext */
  }
}
MyClass.contextType = MyContext;

//используя static
class MyClass extends React.Component {
  static contextType = MyContext;
  render() {
    let value = this.context;
    /* отрендерить что-то, используя значение MyContext */
  }
}
`},
      { p: 'В свойство класса contextType может быть назначен объект контекста, созданный с помощью React.createContext(). С помощью этого свойства вы можете использовать ближайшее и актуальное значение указанного контекста при помощи this.context. В этом случае вы получаете доступ к контексту, как во всех методах жизненного цикла, так и в рендер-методе.' },
      {
        c: `<MyContext.Consumer>
  {value => /* отрендерить что-то, используя значение контекста */}
</MyContext.Consumer>`},
      { p: 'Consumer — это React-компонент, который подписывается на изменения контекста. В свою очередь, использование этого компонента позволяет вам подписаться на контекст в функциональном компоненте.' },
      { p: 'Consumer принимает функцию в качестве дочернего компонента. Эта функция принимает текущее значение контекста и возвращает React-компонент. Передаваемый аргумент value будет равен ближайшему (вверх по дереву) значению этого контекста, а именно пропу value компонента Provider. Если такого компонента Provider не существует, аргумент value будет равен значению defaultValue, которое было передано в createContext().' },
      { w: 'Consumer можно заменить использованием хука useContext().' },
      { p: 'Объекту Context можно задать строковое свойство displayName. React DevTools использует это свойство при отображении контекста.' },
      {
        c: `const MyContext = React.createContext(/* некоторое значение */);
MyContext.displayName = 'MyDisplayName';

<MyContext.Provider> // "MyDisplayName.Provider" в DevTools
<MyContext.Consumer> // "MyDisplayName.Consumer" в DevTools`}


    ]
  },
  {
    path: 'useMemo', title: 'useMemo', content: [
      { p: 'useMemo — это React Hook, который позволяет кэшировать результат вычислений между повторными рендерингами.' },
      { c: `const cachedValue = useMemo(calculateValue, dependencies)` },
      { h: 'useMemo(calculateValue, dependencies)' },
      { p: 'Параметры' },
      {
        l: ['calculateValue: Функция, вычисляющая значение, которое вы хотите кэшировать. Она должна быть чистой, не должна принимать аргументов и должна возвращать значение любого типа. React вызовет вашу функцию во время первоначального рендеринга. При следующем рендеринге React снова вернет то же значение, если dependencies не изменились с момента последнего рендеринга. В противном случае он вызовет calculateValue, вернет результат и сохранит его, чтобы его можно было повторно использовать позже.',
          'dependencies: Список всех реактивных значений, на которые ссылается calculateValue. Реактивные значения включают реквизиты, состояние и все переменные и функции, объявленные непосредственно внутри тела вашего компонента. Список зависимостей должен иметь постоянное количество элементов и быть встроенным, как [dep1, dep2, dep3]. React будет сравнивать каждую зависимость с ее предыдущим значением, используя Object.is сравнение.']
      },
      {
        p: `При начальном рендеринге useMemo возвращает результат вызова calculateValue без аргументов.

      Во время следующих рендеров он либо вернет уже сохраненное значение из последнего рендера (если зависимости не изменились), либо снова вызовет и вернет возвращенный calculateValue результат.`},
      {
        c: `import { useMemo } from 'react';

function TodoList({ todos, tab }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab),[todos, tab]);
  // ...
}`},
      { p: 'useMemo является хуком, поэтому вы можете вызывать его только на верхнем уровне вашего компонента или ваших собственных хуков. Вы не можете вызывать его внутри циклов или условий. Если вам это нужно, извлеките новый компонент и переместите в него состояние.' }
    ]
  },
  {
    path: 'router', title: 'Router', content: [
      { p: 'В React имеется своя система маршрутизации, которая позволяет сопоставлять запросы к приложению с определенными компонентами. Ключевым звеном в работе маршрутизации является модуль react-router, который содержит основной функционал по работе с маршрутизацией. Однако если мы собираемся работать в браузере, то нам также надо использовать модуль react-router-dom.' },
      { p: 'Router определяет набор маршрутов и, когда к приложению, приходит запрос, то Router выполняет сопоставление запроса с маршрутами. И если какой-то маршрут совпадает с URL запроса, то этот маршрут выбирается для обработки запроса.' },
      { p: 'И также для выбора маршрута определен объект Routes. Он содержит набор маршрутов и позволяет выбрать первый попавшийся маршрут и его использовать для обработки.' },
      { p: `Каждый маршрут представляет объект Route. Он имеет ряд атрибутов. В частности, здесь для маршрута устанавливаются два атрибута:        ` },
      {
        l: ['path: шаблон адреса, с которым будет сопоставляться запрошенный адрес URL',
          'element - тот компонент, который отвечает за обработку запроса по этому маршруту',
        ]
      },
      { p: 'Например, первый маршрут выступает в качестве корневого. Он сопоставляется с адресом "/" и обрабатывается компонентом Main.Второй маршрут будет сопоставляться с адресом "/about", а обрабатываться он будет компонентом About. Особо следует выделить третий маршрут:' },
      {
        c: `<Route path="/" element={<Main />} />
<Route path="/about" element={<About />} />
<Route path="*" element={<NotFound />} />`},
      { p: 'Путь в виде звездочки - "*" указывает, что этот маршрут будет сопоставляться со всеми адресами URL, которые не соответствуют предыдущим маршрутам. И он будет обрабатываться компонентом NotFound. Таким образом мы можем задать обработку при обращении к несуществующим ресурсам в приложении.' },
      { p: 'В рамках маршрутов в React можно определять дочерние маршруты. Такие подмаршруты будут отсчитываться от главного маршрута. Но для построения подобной системы есть ряд подходов. Рассмотрим их.' },
      {
        c: `<Router>
  <div>
      <Routes>
      <Route path="/" element={<h2>Главная</h2>} />
      <Route path="/products/*" element={<Products />} />
      <Route path="*" element={<h2>Ресурс не найден</h2>} />
      </Routes>
  </div>
</Router>`},
      { p: 'Для обработки запроса "/products" здесь определен маршрут, который обрабатывается компонентом Products:' },
      { c: `<Route path="/products/*" element={<Products />} />` },
      { p: 'Обратите внимание на шаблон пути: path="/products/*". Символ * указывает, что компонент Products будет обрабатывать маршруты, которые начинаются "/products/", но после слеша также могут идти и другие символы.' },
      {
        c: `function Products(){
  return <div>
          <h2>Товары</h2>
          <Routes>
              <Route path="/phones" element={<Phone />} />
              <Route path="/tablets" element={<Tablet />} />
          </Routes>
      </div>;
}`},
      { p: 'Вложенные маршруты отсчитываются фактически от главного маршрута "/products". То есть маршрут "/phones" будет обрабатывать запросы по пути "/phones", который добавляется к пути главного компонента - "/products", то есть в итоге по пути "/products/phones". Аналогичным образом запросы по пути "/products/tablets" будут обрабатываться компонентом Tablet.' },
      { p: 'Можно использовать Outlet для вставки содержимого дочернего компонента в главный. Пример из этого проекта:' },
      {
        c: `import { Outlet } from "react-router-dom";
//...
const Main = () => {
  return (
      <main className="main">
          //...
          <Outlet />
      </main>
  );
}

function App() {
  const {theme} = useContext(Context);
  return (
    <div className={"App " + theme}>
      <Header/>
      <Main />
    </div>
  );
}
const router = createBrowserRouter( // другой способ создания роутера
  [
    {
      path: '*',
      element: <ErrorPage />, // 404
    },
    {
      path: 'react-cheatsheet/',
      element: <Home />, // домашняя страница
    },
    {
      path: 'react-cheatsheet/topic',
      element: <App />,
      children: [ // дочерние роуты, которые будут вставляться в <App />
        ...contentData.map(topic => {
          const { path, title, content } = topic;
          return {
            path: path,
            element: <Topic title={title} content={content} />,
          }
        })
      ]
    },
  ]
)
root.render(
  <React.StrictMode>
    <ThemeContext>
      <RouterProvider router={router}> // Оборачиваем приложение в роутер
        <Home />
      </RouterProvider>
    </ThemeContext>
  </React.StrictMode>
);
`},
    ]
  },
  {
    path: 'forms', title: 'Работа с формами', content: [
      { p: 'По умолчанию браузер переходит на другую страницу при отправке HTML-форм. Если вас это устраивает, то не надо ничего менять, в React формы работают как обычно. Однако чаще всего форму удобнее обрабатывать с помощью JavaScript-функции, у которой есть доступ к введённым данным. Стандартный способ реализации такого поведения называется «управляемые компоненты». Он использует состояние компонента.' },
      { p: 'Для отмены стандартного поведения события обычно используется метод event.preventDefault().' },
      {
        c: `class NameForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
      this.setState({value: event.target.value});
  }
  handleSubmit(event) {
      alert('Отправленное имя: ' + this.state.value);
      event.preventDefault();
  }
  render() {
      return (
      <form onSubmit={this.handleSubmit}>
          <label>Имя:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Отправить" />
      </form>
      );
  }
}`},
      { p: 'В управляемом компоненте значение поля ввода всегда определяется состоянием React. Хотя это означает, что вы должны написать немного больше кода, теперь вы сможете передать значение и другим UI-элементам или сбросить его с других обработчиков событий.' },
      { h: 'Неуправляемые компоненты' },
      { p: 'В большинстве случаев при работе с формами мы рекомендуем использовать управляемые компоненты. В управляемом компоненте, данные формы обрабатываются React-компонентом. В качестве альтернативы можно использовать неуправляемые компоненты. Они хранят данные формы прямо в DOM.' },
      { p: 'Вместо того, чтобы писать обработчик события для каждого обновления состояния, вы можете использовать неуправляемый компонент и читать значения из DOM через реф.' },
      {
        c: `class NameForm extends React.Component {
  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.input = React.createRef();
  }
  
  handleSubmit(event) {
      alert('Отправленное имя: ' + this.input.current.value);
      event.preventDefault();
  }
  
  render() {
      return (
      <form onSubmit={this.handleSubmit}>
          <label>Имя:<input type="text" ref={this.input} /></label>
          <input type="submit" value="Отправить" />
      </form>
      );
  }
}`}

    ]
  },

]


const router = createBrowserRouter(
  [
    {
      path: '*',
      element: <ErrorPage />,
    },
    {
      path: '/react-cheatsheet/',
      element: <Home />,
    },
    {
      path: '/react-cheatsheet/topic',
      element: <App />,
      children: data.map(topic => {
        // children: [...await getData()].map(topic => {
        const { path, title, content } = topic;
        return {
          path: path,
          element: <Topic title={title} content={content} />,
        }
      })
    },
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContext>
      <RouterProvider router={router}>
        <Home />
      </RouterProvider>
    </ThemeContext>
  </React.StrictMode>,
)

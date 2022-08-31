
import './App.css';
import ArticleContainer from './components/Articles/Articles';
import Header from './components/Header';
import PageDescription from './components/PageDescription';
import ArticlesContainer from './components/Articles/ArticlesContainer';

export default function App() {
  return (
    <div className="App">
      <Header />
      <PageDescription />
      <ArticlesContainer />
    </div>
  );
}

 

import { useState } from 'react';
import { RepositoryItem } from './RepositoryItem';
 
import '../styles/repositories.scss';

// Url repos https://api.github.com/orgs/rocketseat/repos

const repository = {
  name  : 'Javascript',
  description: 'Forms in php', 
  link: 'https://github.com/php'
};


export function RepositoryList(){
  const [repositories, setRepositories] = useState([]);

  return (
    <section className="repository-list">
      <h1>Listar Repositorios</h1>

      <ul>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        
      </ul>
    </section>
  );
}
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

import { API_CONCURRENCY } from '@/constant';

import { TConcurrencyAPI } from '@customTypes';

import './style.css';


function StatusConcurrency (): JSX.Element {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<TConcurrencyAPI | undefined>(undefined);
  const [error, setError] = useState<boolean>(false);


  const fetchValute = async () => {
    try {
      setLoading(true);
      const { data: fetchData } = await axios.get<TConcurrencyAPI>(API_CONCURRENCY);
      setData(fetchData);
      setLoading(false);
    } catch {
      setLoading(false);
      setError(true);
      toast.error('Ошибка получения валют!')
    }
  }

  useEffect(() => {
      fetchValute();
    }, []);

  return (
    <div className="status-concurrency">
      { !data && isLoading && <h1 className='loading'>Загрузка...</h1> }
      { !error && data && !isLoading && 
        <>
          <div>
            <div>
              <p>$</p>
            </div>
            <h1>Доллар:</h1>
            <p>{ data.Valute.USD.Value } $</p>
          </div>
          <div>
            <div>
              <p>€</p>
            </div>
            <h1>Евро:</h1>
            <p>{ data.Valute.EUR.Value } €</p>
          </div>
        </>
      }
    </div>
  );
}

export default StatusConcurrency;

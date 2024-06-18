// Adicione "use client" aqui para habilitar o uso de hooks
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import style from './styles.module.css'

export default function Doacoes() {
    const [selectedInstitution, setSelectedInstitution] = useState<string | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [opcaoSelecionada, setOpcaoSelecionada] = useState<string | null>(localStorage.getItem('opcaoSelecionada') || null);
    const [selecaoOpcao, setSelecaoOpcao] = useState<string | null>(localStorage.getItem('selecaoOpcao') || null);
    const [endereco, setEndereco] = useState<{ rua: string; bairro: string; cep: string }>({
        rua: '',
        bairro: '',
        cep: '',
    });

    // Adicione "useEffect" aqui para corrigir o erro de compilação
    useEffect(() => {
        const savedEndereco = localStorage.getItem('endereco');
        if (savedEndereco) {
            setEndereco(JSON.parse(savedEndereco));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('endereco', JSON.stringify(endereco));
    }, [endereco]);

    const handleInstitutionSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = event.target.value;
        setSelectedInstitution(selectedOption);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const confirmInstitution = () => {
        if (selectedInstitution) {
            window.alert(`Você selecionou: ${getInstitutionName(selectedInstitution)}`);
            setModalOpen(false);
        }
    };

    const getDescription = (institution: string) => {
        switch (institution) {
            case '1':
                return 'Descrição da Massa Cinzenta...';
            case '2':
                return 'Descrição do Meio Kilo...';
            case '3':
                return 'Descrição da Dona Valda...';
            case '4':
                return 'Descrição da Dolly Guaraná...';
            default:
                return '';
        }
    };

    const getInstitutionName = (institution: string) => {
        switch (institution) {
            case '1':
                return 'Massa Cinzenta';
            case '2':
                return 'Meio Kilo';
            case '3':
                return 'Dona Valda';
            case '4':
                return 'Dolly Guaraná';
            default:
                return '';
        }
    };

    const handleOpcaoClick = (opcao: string) => {
        setOpcaoSelecionada(opcao);
        localStorage.setItem('opcaoSelecionada', opcao);
    };

    const resetSelecao = () => {
        setOpcaoSelecionada(null);
        localStorage.removeItem('opcaoSelecionada');
    };

    const handleOpcaoClick2 = (opcao: string) => {
        setSelecaoOpcao(opcao);
        localStorage.setItem('selecaoOpcao', opcao);
    };

    const handleChangeEndereco = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setEndereco({ ...endereco, [name]: value });
    };

    return (
        <div>
          {!opcaoSelecionada && (
            <main>
              <div className={style.background_condicional}>
                <div className={style.container_condicional}>
                  <h2>Olá, fico muito feliz em vê-lo aqui!</h2><br></br>
                  <h3>Mas para prosseguir, nós precisamos que você especifique uma preferência de doação.</h3>
                  <div className={style.container_btn_option}>
                    <button className={style.btn_option} onClick={() => handleOpcaoClick('opcao1')}>Doar por Produto</button>
                    <button className={style.btn_option} onClick={() => handleOpcaoClick('opcao2')}>Doar por Instituição</button>
                  </div>
                  <h4>Ficou com dúvidas?</h4>
                  <button className={style.btn_option} onClick={() => setModalOpen(true)}>Clique Aqui!</button>
                  {modalOpen && (
                    <div className={style.modal_duvidas}>
                      <div className={style.modal_content_duvidas}>
                        <div className={style.doacao_option}>
                          <h3>Doar por Produto:</h3>
                          <p>Esta opção permite que você escolha um produto específico para doação. Após selecionar o produto desejado, serão exibidas as instituições que aceitam esse tipo de doação.</p>
                        </div>
      
                        <div className={style.doacao_option}>
                          <h3 className={style.second_h3}>Doar por Instituição:</h3>
                          <p>Ao escolher esta opção, você demonstra uma preferência específica de a quem doar. Você poderá selecionar uma instituição de sua escolha para realizar a doação.</p>
      
                        </div>
                        <button className={style.btn_option} onClick={() => setModalOpen(false)}>Fechar</button>
                      </div>
                    </div>
                  )}
                </div>
                <Link href={"/"}><button className={style.btn_voltar}>Voltar</button></Link>
              </div>
            </main>
          )}
      
          {opcaoSelecionada && (
            <div>
              {opcaoSelecionada === 'opcao1' && (
                <main id={style.main_doacoes}>
                  {opcaoSelecionada && (
                    <button className={style.btn_selecionar_outra_opcao} onClick={resetSelecao}>Selecionar outra opção</button>
                  )}
                  <form action='' className={style.container_form}>
                    <div className={style.container_instituicao}>
                      <h2>Selecione o PRODUTO que deseja doar</h2>
                      <label htmlFor="instituicao">Selecionar instituição</label>
                      <select name='select' id='instituicao' className={style.select} >
                        <option value="">Selecione um produto</option>
                        <option value="1">Roupas</option>
                        <option value="2">Brinquedos</option>
                        <option value="3">Alimentos</option>
                        <option value="4">Dinheiro</option>
                        <option value="5">Eletrônicos</option>
                        <option value="6">Outros</option>
                      </select>
                    </div>
      
                    <div>
                      <div className={style.form_control_doacoes}>
                        <label htmlFor="nome">Nome completo</label>
                        <input type="name" id="nome" placeholder="Digite seu nome completo..." />
                      </div>
      
                      <div className={style.form_control_doacoes}>
                        <label htmlFor="cpf">CPF</label>
                        <input type="text" id="cpf" placeholder="Insira corretamente o seu CPF..." />
                      </div>
      
                      <div className={style.form_control_doacoes}>
                        <label htmlFor="telefone">Telefone</label>
                        <input type="tel" id="telefone" placeholder="+55 (xx) xxxxx-xxxx" pattern="^\+[0-9]{2}\s\([0-9]{2}\)\s[0-9]{4,5}-[0-9]{4}$" />
                      </div>
      
                      <div className={style.form_control_doacoes}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Insira um email para contato..." />
                      </div>
      
                      <div>
                        <label htmlFor="entregar_ponto_de_coleta">
                          <input type="radio" name="forma_de_entrega" id="entregar_ponto_de_coleta" onChange={() => handleOpcaoClick2('opcao1')} checked={selecaoOpcao === 'opcao1'} /> Posso levar em um ponto de coleta.
                        </label>
                      </div>
                      <div>
                        <label htmlFor="buscar_em_minha_casa">
                          <input type="radio" name="forma_de_entrega" id="buscar_em_minha_casa" onChange={() => handleOpcaoClick2('opcao2')} checked={selecaoOpcao === 'opcao2'} /> Buscar em minha casa.
                        </label>
                      </div>
                      <br />
                      {selecaoOpcao === 'opcao1' && (
                        <div>
                          <h3>em desenvolvimento.....</h3>
                        </div>
                      )}
      
                      {selecaoOpcao === 'opcao2' && (
                        <div>
                          <div className={style.form_control_doacoes}>
                            <label htmlFor="cep">CEP</label>
                            <input type="text" id="cep" name="cep" value={endereco.cep} onChange={handleChangeEndereco} />
                          </div>
      
                          <div className={style.form_control_doacoes}>
                            <label htmlFor="bairro">Bairro</label>
                            <input type="text" id="bairro" name="bairro" value={endereco.bairro} onChange={handleChangeEndereco} />
                          </div>
      
                          <div className={style.form_control_doacoes}>
                            <label htmlFor="rua">Rua</label>
                            <input type="rua" id="rua" name="rua" value={endereco.rua} onChange={handleChangeEndereco} />
                          </div>
                        </div>
                      )}
      
                      <div className={style.text_checkbox}>
                        <label htmlFor="icheckbox">
                          <input type="checkbox" name="checkbox" id="icheckbox" required />
                          Eu li e concordo com os termos da Política de Privacidade. Ao marcar esta caixa, você
                          confirma que leu e concorda com nossa Política de Privacidade, que descreve como
                          coletamos, usamos e protegemos suas informações pessoais. Para mais detalhes, por favor,
                          leia nossa <a href='#'>Política de Privacidade</a> completa disponível em nosso site.
                        </label>
                      </div>
                    </div>
                    <button className={style.btn_finalizar_doacao} type='submit'>Finalizar Doação</button>
                  </form>
                  <Link href={"/"}><button className={style.btn_voltar}>Voltar</button></Link>
                </main>
              )}
      
              {opcaoSelecionada === 'opcao2' && (
                <main id={style.main_doacoes}>
                  {opcaoSelecionada && (
                    <button className={style.btn_selecionar_outra_opcao} onClick={resetSelecao}>Selecionar outra opção</button>
                  )}
                  <form action='' className={style.container_form}>
                    <div className={style.container_instituicao}>
                      <h2>Selecione a INSTITUIÇÃO para qual deseja doar</h2>
                      <label htmlFor="instituicao">Selecionar instituição</label>
                      <select name='select' id='instituicao' className={style.select} onChange={handleInstitutionSelect}>
                        <option value="">Selecione uma instituição</option>
                        <option value="1">Massa Cinzenta</option>
                        <option value="2">Meio Kilo</option>
                        <option value="3">Dona Valda</option>
                        <option value="4">Dolly Guaraná</option>
                      </select>
                    </div>
      
                    <div>
                      <div className={style.form_control_doacoes}>
                        <label htmlFor="nome">Nome completo</label>
                        <input type="name" id="nome" placeholder="Digite seu nome completo..." />
                      </div>
      
                      <div className={style.form_control_doacoes}>
                        <label htmlFor="cpf">CPF</label>
                        <input type="text" id="cpf" placeholder="Insira corretamente o seu CPF..." />
                      </div>
      
                      <div className={style.form_control_doacoes}>
                        <label htmlFor="telefone">Telefone</label>
                        <input type="tel" id="telefone" placeholder="+55 (xx) xxxxx-xxxx" pattern="^\+[0-9]{2}\s\([0-9]{2}\)\s[0-9]{4,5}-[0-9]{4}$" />
                      </div>
      
                      <div className={style.form_control_doacoes}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Insira um email para contato..." />
                      </div>
      
                      <button className={style.btn_finalizar_doacao} onClick={confirmInstitution}>Finalizar Doação</button>
                    </div>
                  </form>
                  <Link href={"/"}><button className={style.btn_voltar}>Voltar</button></Link>
                </main>
              )}
            </div>
          )}
      
        </div>
      );
    }  
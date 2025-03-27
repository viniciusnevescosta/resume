export const MainLayout = () => {
	return (
		<>
			<header>
				<h1>VINÍCIUS NEVES COSTA</h1>
				<nav className='contact-info' aria-label='Contatos principais'>
					<a href='mailto:vinicius.nevesco@gmail.com' aria-label='Enviar email'>
						<i className='ri-mail-line' />
						E-mail
					</a>
					{/* <a href="" aria-label="Telefone">
                  <i className="ri-whatsapp-line" />Telefone
              </a> */}
					<a
						href='https://linkedin.com/in/nevesco'
						target='_blank'
						rel='noreferrer'
						aria-label='Perfil no LinkedIn'
					>
						<i className='ri-linkedin-box-line' />
						LinkedIn
					</a>
					<a
						href='https://github.com/viniciusnevescosta'
						target='_blank'
						rel='noreferrer'
						aria-label='Perfil no GitHub'
					>
						<i className='ri-github-line' />
						GitHub
					</a>
					{/* <a href="https://github.com/viniciusnevescosta" target="_blank" rel="noreferrer" aria-label="Perfil no GitHub">
                  <i className="ri-article-line" />Blog
              </a> */}
				</nav>
			</header>
			<section>
				<h2>RESUMO PROFISSIONAL</h2>
				<p>Trabalho com React e Vue para dar vida a interfaces dinâmicas, e no back-end navego por C# com DDD, além de construir microserviços escaláveis na AWS. Quando não estou codando, você me encontra jogando, tomando um café (ou três) ou mergulhado em projetos pessoais que misturam código e curiosidade.</p>
			</section>
			<section>
				<h2>EXPERIÊNCIA PROFISSIONAL</h2>
				<div>
					<div className='job-title'>Dev Full Stack Jr. | MTP Brasil</div>
					<div className='job-period'>Jan 2025 - Presente</div>
					<ul>
						<li>
							Desenvolvo sistema interno com arquitetura de microsserviços em C#
							e frontend React
						</li>
						<li>
							Implemento RPA para recrutamento com IA avaliadora de candidatos,
							integrando:
							<ul className='sub-list'>
								<li>Processamento assíncrono de currículos</li>
								<li>
									Pipeline de análise de compatibilidade técnica via agentes LLM
									customizados
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<div>
					<div className='job-title'>Analista de Infra Jr. | MTP Brasil</div>
					<div className='job-period'>Jan 2024 - Dez 2024</div>
					<ul>
						<li>
							Processei 50K+ registros de ponto através de ETL Node.js/MongoDB,
							alimentando KPIs
						</li>
						<li>
							Realizei migração total para AWS EC2 com Docker, reduzindo custos
							de infraestrutura em R$ 60k/ano versus solução on-premise anterior
						</li>
						<li>
							Configurei 10+ pipelines CI/CD no Azure DevOps para deploy
							automático de containers Docker
						</li>
					</ul>
				</div>
				<div>
					<div className='job-title'>Auxiliar de TI | MTP Brasil</div>
					<div className='job-period'>Mar 2023 - Dez 2023</div>
					<ul>
						<li>
							Gerenciei inventário de 300+ ativos de TI para 200+ usuários
						</li>
						<li>
							Atendi chamados técnicos com média de 92% de resolução em primeira
							linha
						</li>
						<li>
							Implementei políticas de segurança no Microsoft 365 reduzindo
							incidentes em 65%
						</li>
					</ul>
				</div>
			</section>
			<section>
				<h2>TECNOLOGIAS</h2>
				<div className='skill-category'>
					<div className='skill-group'>
						<strong>Front-end</strong>
						<span className='skill-item'>React</span>
						<span className='skill-item'>Vue</span>
						<span className='skill-item'>MUI</span>
						<span className='skill-item'>Tailwind</span>
						<span className='skill-item'>TypeScript</span>
					</div>
					<div className='skill-group'>
						<strong>Back-end/Cloud</strong>
						<span className='skill-item'>C#</span>
						<span className='skill-item'>Golang</span>
						<span className='skill-item'>AWS</span>
						<span className='skill-item'>Docker</span>
					</div>
					<div className='skill-group'>
						<strong>Banco de Dados</strong>
						<span className='skill-item'>MySQL</span>
						<span className='skill-item'>PostgreSQL</span>
						<span className='skill-item'>MongoDB</span>
						<span className='skill-item'>Firebase</span>
					</div>
				</div>
			</section>
			<section>
				<h2>CERTIFICAÇÕES</h2>
				<ul>
					<li>
						<strong>AWS Certified Cloud Practitioner</strong>
						<br />
						<a
							href='https://www.credly.com/badges/517fd129-d1e7-4851-a9f7-09a2abadbf01'
							target='_blank'
							rel='noreferrer'
						>
							Ver credencial verificável
						</a>
					</li>
				</ul>
			</section>
			<section>
				<h2>PROJETOS DESTACADOS</h2>
				<ul>
					<li>
						<strong>CommitFlow</strong> - Ferramenta CLI que simplifica a
						criação de commits e branches semânticos
						<br />
						<a
							href='https://github.com/viniciusnevescosta/CommitFlow'
							target='_blank'
							rel='noreferrer'
						>
							Ver detalhes técnicos
						</a>
					</li>
					<li>
						<strong>Equilíbrio Natural (TCC)</strong> - Sistema multiplataforma
						para gestão de estoque
						<br />
						<a
							href='https://github.com/FrogDevs/etec-final-course-project'
							target='_blank'
							rel='noreferrer'
						>
							Ver detalhes técnicos
						</a>
					</li>
				</ul>
			</section>
			<section>
				<h2>FORMAÇÃO</h2>
				<ul>
					{/* <li>
						<strong>Engenharia da Computação</strong>
						<br />
						Universidade Virtual do Estado de São Paulo - Univesp (2025 -
						Cursando)
					</li> */}
					<li>
						<strong>Análise e Desenvolvimento de Sistemas</strong>
						<br />
						Escola Técnica Estadual - Etec
					</li>
				</ul>
			</section>
			<section>
				<h2>IDIOMAS</h2>
				<div className='language-proficiency'>
					<div className='proficiency-item'>
						<strong>Inglês</strong>
						<br />
						Fluente
						<br />
					</div>
					<br />
					<div className='proficiency-item'>
						<strong>Espanhol</strong>
						<br />
						Básico
						<br />
					</div>
					<br />
					<div className='proficiency-item'>
						<strong>Português</strong>
						<br />
						Nativo
					</div>
				</div>
			</section>
		</>
	)
}

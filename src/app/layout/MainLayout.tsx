export const MainLayout = () => {
	return (
		<div itemScope itemType='http://schema.org/Person'>
			<header>
				<h1 itemProp='name'>VINÍCIUS NEVES COSTA</h1>
				<nav
					className='contact-info'
					aria-label='Contatos e redes sociais'
					itemProp='contactPoint'
					itemScope
					itemType='http://schema.org/ContactPoint'
				>
					<a
						href='mailto:vinicius.nevesco@gmail.com'
						aria-label='Enviar email'
						itemProp='email'
					>
						<i className='ri-mail-line' />
						E-mail
					</a>
					<a
						href='https://linkedin.com/in/nevesco'
						target='_blank'
						rel='noreferrer'
						aria-label='Perfil no LinkedIn'
						itemProp='url'
					>
						<i className='ri-linkedin-box-line' />
						LinkedIn
					</a>
					<a
						href='https://github.com/viniciusnevescosta'
						target='_blank'
						rel='noreferrer'
						aria-label='Perfil no GitHub'
						itemProp='url'
					>
						<i className='ri-github-line' />
						GitHub
					</a>
				</nav>
			</header>
			<main>
				<section>
					<h2>RESUMO PROFISSIONAL</h2>
					<p>
						Trabalho com React e Vue para dar vida a interfaces dinâmicas, e no
						back-end navego por C# com DDD, além de construir microserviços
						escaláveis na AWS. Quando não estou codando, você me encontra
						jogando, tomando um café (ou três) ou mergulhado em projetos
						pessoais que misturam código e curiosidade.
					</p>
				</section>

				<section>
					<h2>EXPERIÊNCIA PROFISSIONAL</h2>
					<article itemScope itemType='http://schema.org/Organization'>
						<h3>
							<span itemProp='jobTitle'>Dev Full Stack Jr.</span>
							<span aria-hidden='true'> | </span>
							<span itemProp='name'>MTP Brasil</span>
						</h3>
						<p className='job-period'>
							<time itemProp='startDate' dateTime='2025-01'>
								Jan 2025
							</time>{' '}
							- <time itemProp='endDate'>Presente</time>
						</p>
						<ul>
							<li>
								Desenvolvo sistema interno com arquitetura de microsserviços em
								C# e frontend React
							</li>
							<li>
								Implemento RPA para recrutamento com IA avaliadora de
								candidatos, integrando:
								<ul className='sub-list'>
									<li>Processamento assíncrono de currículos</li>
									<li>
										Pipeline de análise de compatibilidade técnica via agentes
										LLM customizados
									</li>
								</ul>
							</li>
						</ul>
					</article>

					<article itemScope itemType='http://schema.org/Organization'>
						<h3>
							<span itemProp='jobTitle'>Analista de Infra Jr.</span>
							<span aria-hidden='true'> | </span>
							<span itemProp='name'>MTP Brasil</span>
						</h3>
						<p className='job-period'>
							<time itemProp='startDate' dateTime='2024-01'>
								Jan 2024
							</time>{' '}
							- <time dateTime='2024-12'>Dez 2024</time>
						</p>
						<ul>
							<li>
								Processei 50K+ registros de ponto através de ETL
								Node.js/MongoDB, alimentando KPIs
							</li>
							<li>
								Realizei migração total para AWS EC2 com Docker, reduzindo
								custos de infraestrutura em R$ 60k/ano versus solução on-premise
								anterior
							</li>
							<li>
								Configurei 10+ pipelines CI/CD no Azure DevOps para deploy
								automático de containers Docker
							</li>
						</ul>
					</article>

					<article itemScope itemType='http://schema.org/Organization'>
						<h3>
							<span itemProp='jobTitle'>Assistente de TI</span>
							<span aria-hidden='true'> | </span>
							<span itemProp='name'>MTP Brasil</span>
						</h3>
						<p className='job-period'>
							<time itemProp='startDate' dateTime='2023-03'>
								Mar 2023
							</time>{' '}
							- <time dateTime='2023-12'>Dez 2023</time>
						</p>
						<ul>
							<li>
								Gerenciei inventário de 300+ ativos de TI para 200+ usuários
							</li>
							<li>
								Atendi chamados técnicos com média de 92% de resolução em
								primeira linha
							</li>
							<li>
								Implementei políticas de segurança no Microsoft 365 reduzindo
								incidentes em 65%
							</li>
						</ul>
					</article>
				</section>

				<section itemScope itemType='http://schema.org/ItemList'>
					<h2 itemProp='name'>TECNOLOGIAS</h2>
					<div className='skill-category'>
						<dl className='skill-group'>
							<dt>
								<strong>Front-end</strong>
							</dt>
							<dd itemProp='itemListElement' className='skill-item'>
								React
							</dd>
							<dd itemProp='itemListElement' className='skill-item'>
								Vue
							</dd>
							<dd itemProp='itemListElement' className='skill-item'>
								MUI
							</dd>
							<dd itemProp='itemListElement' className='skill-item'>
								Tailwind
							</dd>
							<dd itemProp='itemListElement' className='skill-item'>
								Typescript
							</dd>
						</dl>
						<dl className='skill-group'>
							<dt>
								<strong>Back-end / Cloud</strong>
							</dt>
							<dd itemProp='itemListElement' className='skill-item'>
								C#
							</dd>
							<dd itemProp='itemListElement' className='skill-item'>
								Golang
							</dd>
							<dd itemProp='itemListElement' className='skill-item'>
								Docker
							</dd>
							<dd itemProp='itemListElement' className='skill-item'>
								AWS
							</dd>
						</dl>
						<dl className='skill-group'>
							<dt>
								<strong>Banco de Dados</strong>
							</dt>
							<dd itemProp='itemListElement' className='skill-item'>
								MySQL
							</dd>
							<dd itemProp='itemListElement' className='skill-item'>
								PostgreSQL
							</dd>
							<dd itemProp='itemListElement' className='skill-item'>
								MongoDB
							</dd>
							<dd itemProp='itemListElement' className='skill-item'>
								Firebase
							</dd>
						</dl>
					</div>
				</section>

				<section>
					<h2>CERTIFICAÇÕES</h2>
					<ul>
						<li
							itemScope
							itemType='http://schema.org/EducationalOccupationalCredential'
						>
							<strong itemProp='name'>AWS Certified Cloud Practitioner</strong>
							<meta
								itemProp='url'
								content='https://www.credly.com/badges/517fd129-d1e7-4851-a9f7-09a2abadbf01'
							/>
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
						<li itemScope itemType='http://schema.org/CreativeWork'>
							<strong itemProp='name'>CommitFlow</strong>
							<p>
								Ferramenta CLI que simplifica a criação de commits e branches
								semânticos
							</p>
							<meta
								itemProp='description'
								content='Ferramenta CLI que simplifica a criação de commits e branches semânticos'
							/>
							<link
								itemProp='url'
								href='https://github.com/viniciusnevescosta/CommitFlow'
							/>
							<a
								href='https://github.com/viniciusnevescosta/CommitFlow'
								target='_blank'
								rel='noreferrer'
							>
								Ver detalhes técnicos
							</a>
						</li>
						<li itemScope itemType='http://schema.org/CreativeWork'>
							<strong itemProp='name'>Equilíbrio Natural - ERP</strong>
							<p>
								Sistema multiplataforma para gestão de estoque da empresa
								Equilíbrio Natural
							</p>
							<meta
								itemProp='description'
								content='Sistema multiplataforma para gestão de estoque da empresa Equilíbrio Natural'
							/>
							<link
								itemProp='url'
								href='https://github.com/FrogDevs/etec-final-course-project'
							/>
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
						<li itemScope itemType='http://schema.org/EducationalEvent'>
							<span itemProp='name'>
								<strong>Análise e Desenvolvimento de Sistemas</strong>
							</span>
							<div
								itemProp='organizer'
								itemScope
								itemType='http://schema.org/EducationalOrganization'
							>
								<span itemProp='name'>Escola Técnica Estadual - Etec</span>
							</div>
						</li>
					</ul>
				</section>

				<section>
					<h2>IDIOMAS</h2>
					<ul className='language-proficiency'>
						{/* deixar inline */}
						<li itemScope itemType='http://schema.org/Language'>
							<strong itemProp='name'>Inglês</strong>
							<br />
							<span itemProp='proficiencyLevel'>Fluente</span>
						</li>
						<li itemScope itemType='http://schema.org/Language'>
							<strong itemProp='name'>Espanhol</strong>
							<br />
							<span itemProp='proficiencyLevel'>Básico</span>
						</li>
						<li itemScope itemType='http://schema.org/Language'>
							<strong itemProp='name'>Português</strong>
							<br />
							<span itemProp='proficiencyLevel'>Nativo</span>
						</li>
					</ul>
				</section>
			</main>
		</div>
	)
}

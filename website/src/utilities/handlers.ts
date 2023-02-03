import type { GetServerSideProps, GetStaticPaths, GetStaticProps, NextApiHandler } from 'next'
import { satisfies } from './satisfies'

// @TODO: remove when Next.js fixes inferring with `{ notFound: true }`
export type InferDataLoaderProps<DataLoader extends GetServerSideProps | GetStaticProps> = Extract<
	Awaited<ReturnType<DataLoader>>,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	{ props: any }
>['props']

// @TODO: remove when Next.js fixes inferring with `{ notFound: true }`
export type InferGetServerSideProps<DataLoader extends GetServerSideProps> = InferDataLoaderProps<DataLoader>

// @TODO: remove when Next.js fixes inferring with `{ notFound: true }`
export type InferGetStaticProps<DataLoader extends GetStaticProps> = InferDataLoaderProps<DataLoader>

export const handleGetStaticPaths = satisfies<GetStaticPaths>()

export const handleGetStaticProps = satisfies<GetStaticProps>()

export const handleGetServerSideProps = satisfies<GetServerSideProps>()

export const handleApiRequest = satisfies<NextApiHandler>()

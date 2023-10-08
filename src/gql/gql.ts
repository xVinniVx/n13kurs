/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query CategoriesGetList {\n  categories {\n    data {\n      id\n      attributes {\n        name\n        slug\n      }\n    }\n  }\n}": types.CategoriesGetListDocument,
    "query CategoryGetSeoBySlug($slug: String!) {\n  categories(filters: {slug: {eq: $slug}}) {\n    data {\n      id\n      attributes {\n        name\n        description\n        seo {\n          seoTitle\n          seoDescription\n        }\n      }\n    }\n  }\n}": types.CategoryGetSeoBySlugDocument,
    "query CollectionGetBySlug($slug: String!) {\n  collections(filters: {slug: {eq: $slug}}) {\n    data {\n      id\n      attributes {\n        name\n        slug\n        description\n        image\n      }\n    }\n  }\n}": types.CollectionGetBySlugDocument,
    "query CollectionGetList {\n  collections {\n    data {\n      id\n      attributes {\n        name\n        slug\n        description\n        image\n      }\n    }\n  }\n}": types.CollectionGetListDocument,
    "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    data {\n      id\n      attributes {\n        name\n        slug\n        price\n        image {\n          url\n          altText\n        }\n        shortDescription\n        longDescription\n        seo {\n          seoTitle\n          seoDescription\n        }\n        category {\n          data {\n            attributes {\n              name\n            }\n          }\n        }\n        ratings {\n          data {\n            attributes {\n              name\n              email\n              title\n              content\n              rating\n              createdAt\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.ProductGetByIdDocument,
    "query ProductGetList {\n  products {\n    data {\n      id\n      attributes {\n        name\n        slug\n        price\n        image {\n          url\n          altText\n        }\n        category {\n          data {\n            attributes {\n              name\n            }\n          }\n        }\n        ratings {\n          data {\n            attributes {\n              rating\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.ProductGetListDocument,
    "query ProductGetListByPage($page: Int!, $pageSize: Int!) {\n  products(pagination: {page: $page, pageSize: $pageSize}) {\n    data {\n      id\n      attributes {\n        name\n        slug\n        price\n        image {\n          url\n          altText\n        }\n        category {\n          data {\n            attributes {\n              name\n            }\n          }\n        }\n        ratings {\n          data {\n            attributes {\n              rating\n            }\n          }\n        }\n      }\n    }\n    meta {\n      pagination {\n        total\n        page\n        pageSize\n        pageCount\n      }\n    }\n  }\n}": types.ProductGetListByPageDocument,
    "query ProductGetListBySearch($search: String!, $page: Int!, $pageSize: Int!) {\n  products(\n    filters: {name: {containsi: $search}}\n    pagination: {page: $page, pageSize: $pageSize}\n  ) {\n    data {\n      id\n      attributes {\n        name\n        slug\n        price\n        image {\n          url\n          altText\n        }\n        category {\n          data {\n            attributes {\n              name\n            }\n          }\n        }\n        ratings {\n          data {\n            attributes {\n              rating\n            }\n          }\n        }\n      }\n    }\n    meta {\n      pagination {\n        total\n        page\n        pageSize\n        pageCount\n      }\n    }\n  }\n}": types.ProductGetListBySearchDocument,
    "query ProductGetPaginationByPage($page: Int!, $pageSize: Int!) {\n  products(pagination: {page: $page, pageSize: $pageSize}) {\n    meta {\n      pagination {\n        total\n        page\n        pageSize\n        pageCount\n      }\n    }\n  }\n}": types.ProductGetPaginationByPageDocument,
    "query ProductGetSeoById($id: ID!) {\n  product(id: $id) {\n    data {\n      id\n      attributes {\n        name\n        shortDescription\n        seo {\n          seoTitle\n          seoDescription\n        }\n      }\n    }\n  }\n}": types.ProductGetSeoByIdDocument,
    "query ProductsGetListByCategory($slug: String!, $page: Int!, $pageSize: Int!) {\n  products(\n    filters: {category: {slug: {eq: $slug}}}\n    pagination: {page: $page, pageSize: $pageSize}\n  ) {\n    data {\n      id\n      attributes {\n        name\n        slug\n        price\n        image {\n          url\n          altText\n        }\n        category {\n          data {\n            attributes {\n              name\n            }\n          }\n        }\n        ratings {\n          data {\n            attributes {\n              rating\n            }\n          }\n        }\n      }\n    }\n    meta {\n      pagination {\n        total\n        page\n        pageSize\n        pageCount\n      }\n    }\n  }\n}": types.ProductsGetListByCategoryDocument,
    "query RatingsGetListByProduct($productId: ID!) {\n  ratings(filters: {product: {id: {eq: $productId}}}) {\n    meta {\n      pagination {\n        total\n      }\n    }\n    data {\n      id\n      attributes {\n        name\n        email\n        title\n        content\n        rating\n      }\n    }\n  }\n}": types.RatingsGetListByProductDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetList {\n  categories {\n    data {\n      id\n      attributes {\n        name\n        slug\n      }\n    }\n  }\n}"): typeof import('./graphql').CategoriesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetSeoBySlug($slug: String!) {\n  categories(filters: {slug: {eq: $slug}}) {\n    data {\n      id\n      attributes {\n        name\n        description\n        seo {\n          seoTitle\n          seoDescription\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CategoryGetSeoBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetBySlug($slug: String!) {\n  collections(filters: {slug: {eq: $slug}}) {\n    data {\n      id\n      attributes {\n        name\n        slug\n        description\n        image\n      }\n    }\n  }\n}"): typeof import('./graphql').CollectionGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetList {\n  collections {\n    data {\n      id\n      attributes {\n        name\n        slug\n        description\n        image\n      }\n    }\n  }\n}"): typeof import('./graphql').CollectionGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    data {\n      id\n      attributes {\n        name\n        slug\n        price\n        image {\n          url\n          altText\n        }\n        shortDescription\n        longDescription\n        seo {\n          seoTitle\n          seoDescription\n        }\n        category {\n          data {\n            attributes {\n              name\n            }\n          }\n        }\n        ratings {\n          data {\n            attributes {\n              name\n              email\n              title\n              content\n              rating\n              createdAt\n            }\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetList {\n  products {\n    data {\n      id\n      attributes {\n        name\n        slug\n        price\n        image {\n          url\n          altText\n        }\n        category {\n          data {\n            attributes {\n              name\n            }\n          }\n        }\n        ratings {\n          data {\n            attributes {\n              rating\n            }\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetListByPage($page: Int!, $pageSize: Int!) {\n  products(pagination: {page: $page, pageSize: $pageSize}) {\n    data {\n      id\n      attributes {\n        name\n        slug\n        price\n        image {\n          url\n          altText\n        }\n        category {\n          data {\n            attributes {\n              name\n            }\n          }\n        }\n        ratings {\n          data {\n            attributes {\n              rating\n            }\n          }\n        }\n      }\n    }\n    meta {\n      pagination {\n        total\n        page\n        pageSize\n        pageCount\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductGetListByPageDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetListBySearch($search: String!, $page: Int!, $pageSize: Int!) {\n  products(\n    filters: {name: {containsi: $search}}\n    pagination: {page: $page, pageSize: $pageSize}\n  ) {\n    data {\n      id\n      attributes {\n        name\n        slug\n        price\n        image {\n          url\n          altText\n        }\n        category {\n          data {\n            attributes {\n              name\n            }\n          }\n        }\n        ratings {\n          data {\n            attributes {\n              rating\n            }\n          }\n        }\n      }\n    }\n    meta {\n      pagination {\n        total\n        page\n        pageSize\n        pageCount\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductGetListBySearchDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetPaginationByPage($page: Int!, $pageSize: Int!) {\n  products(pagination: {page: $page, pageSize: $pageSize}) {\n    meta {\n      pagination {\n        total\n        page\n        pageSize\n        pageCount\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductGetPaginationByPageDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetSeoById($id: ID!) {\n  product(id: $id) {\n    data {\n      id\n      attributes {\n        name\n        shortDescription\n        seo {\n          seoTitle\n          seoDescription\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductGetSeoByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListByCategory($slug: String!, $page: Int!, $pageSize: Int!) {\n  products(\n    filters: {category: {slug: {eq: $slug}}}\n    pagination: {page: $page, pageSize: $pageSize}\n  ) {\n    data {\n      id\n      attributes {\n        name\n        slug\n        price\n        image {\n          url\n          altText\n        }\n        category {\n          data {\n            attributes {\n              name\n            }\n          }\n        }\n        ratings {\n          data {\n            attributes {\n              rating\n            }\n          }\n        }\n      }\n    }\n    meta {\n      pagination {\n        total\n        page\n        pageSize\n        pageCount\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListByCategoryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query RatingsGetListByProduct($productId: ID!) {\n  ratings(filters: {product: {id: {eq: $productId}}}) {\n    meta {\n      pagination {\n        total\n      }\n    }\n    data {\n      id\n      attributes {\n        name\n        email\n        title\n        content\n        rating\n      }\n    }\n  }\n}"): typeof import('./graphql').RatingsGetListByProductDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

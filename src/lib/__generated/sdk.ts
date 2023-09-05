import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Dimension: any;
  HexColor: any;
  JSON: any;
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  recipeCollection?: Maybe<RecipeCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsRecipeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsRecipeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetLinkingCollectionsRecipeCollectionOrder {
  CaloriesAsc = 'calories_ASC',
  CaloriesDesc = 'calories_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/chef) */
export type Chef = Entry & {
  __typename?: 'Chef';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ChefLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/chef) */
export type ChefLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/chef) */
export type ChefNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ChefCollection = {
  __typename?: 'ChefCollection';
  items: Array<Maybe<Chef>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ChefFilter = {
  AND?: InputMaybe<Array<InputMaybe<ChefFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ChefFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ChefLinkingCollections = {
  __typename?: 'ChefLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  recipeCollection?: Maybe<RecipeCollection>;
};


export type ChefLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ChefLinkingCollectionsRecipeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ChefLinkingCollectionsRecipeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ChefLinkingCollectionsRecipeCollectionOrder {
  CaloriesAsc = 'calories_ASC',
  CaloriesDesc = 'calories_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ChefOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/faqSection) */
export type FaqSection = Entry & {
  __typename?: 'FaqSection';
  contentfulMetadata: ContentfulMetadata;
  itemsCollection?: Maybe<FaqSectionItemsCollection>;
  linkedFrom?: Maybe<FaqSectionLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/faqSection) */
export type FaqSectionItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/faqSection) */
export type FaqSectionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/faqSection) */
export type FaqSectionTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type FaqSectionCollection = {
  __typename?: 'FaqSectionCollection';
  items: Array<Maybe<FaqSection>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type FaqSectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<FaqSectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FaqSectionFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  itemsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/faqSectionItem) */
export type FaqSectionItem = Entry & {
  __typename?: 'FaqSectionItem';
  answer?: Maybe<FaqSectionItemAnswer>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<FaqSectionItemLinkingCollections>;
  question?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/faqSectionItem) */
export type FaqSectionItemAnswerArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/faqSectionItem) */
export type FaqSectionItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/faqSectionItem) */
export type FaqSectionItemQuestionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type FaqSectionItemAnswer = {
  __typename?: 'FaqSectionItemAnswer';
  json: Scalars['JSON'];
  links: FaqSectionItemAnswerLinks;
};

export type FaqSectionItemAnswerAssets = {
  __typename?: 'FaqSectionItemAnswerAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type FaqSectionItemAnswerEntries = {
  __typename?: 'FaqSectionItemAnswerEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type FaqSectionItemAnswerLinks = {
  __typename?: 'FaqSectionItemAnswerLinks';
  assets: FaqSectionItemAnswerAssets;
  entries: FaqSectionItemAnswerEntries;
  resources: FaqSectionItemAnswerResources;
};

export type FaqSectionItemAnswerResources = {
  __typename?: 'FaqSectionItemAnswerResources';
  block: Array<ResourceLink>;
};

export type FaqSectionItemCollection = {
  __typename?: 'FaqSectionItemCollection';
  items: Array<Maybe<FaqSectionItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type FaqSectionItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<FaqSectionItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FaqSectionItemFilter>>>;
  answer_contains?: InputMaybe<Scalars['String']>;
  answer_exists?: InputMaybe<Scalars['Boolean']>;
  answer_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  question?: InputMaybe<Scalars['String']>;
  question_contains?: InputMaybe<Scalars['String']>;
  question_exists?: InputMaybe<Scalars['Boolean']>;
  question_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  question_not?: InputMaybe<Scalars['String']>;
  question_not_contains?: InputMaybe<Scalars['String']>;
  question_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type FaqSectionItemLinkingCollections = {
  __typename?: 'FaqSectionItemLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type FaqSectionItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum FaqSectionItemOrder {
  QuestionAsc = 'question_ASC',
  QuestionDesc = 'question_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type FaqSectionItemsCollection = {
  __typename?: 'FaqSectionItemsCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type FaqSectionLinkingCollections = {
  __typename?: 'FaqSectionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type FaqSectionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum FaqSectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/footerSection) */
export type FooterSection = Entry & {
  __typename?: 'FooterSection';
  contentfulMetadata: ContentfulMetadata;
  itemsCollection?: Maybe<FooterSectionItemsCollection>;
  linkedFrom?: Maybe<FooterSectionLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/footerSection) */
export type FooterSectionItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/footerSection) */
export type FooterSectionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/footerSection) */
export type FooterSectionTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type FooterSectionCollection = {
  __typename?: 'FooterSectionCollection';
  items: Array<Maybe<FooterSection>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type FooterSectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterSectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterSectionFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  itemsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/footerSectionItem) */
export type FooterSectionItem = Entry & {
  __typename?: 'FooterSectionItem';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<FooterSectionItemLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/footerSectionItem) */
export type FooterSectionItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/footerSectionItem) */
export type FooterSectionItemTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/footerSectionItem) */
export type FooterSectionItemUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type FooterSectionItemCollection = {
  __typename?: 'FooterSectionItemCollection';
  items: Array<Maybe<FooterSectionItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type FooterSectionItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterSectionItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterSectionItemFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FooterSectionItemLinkingCollections = {
  __typename?: 'FooterSectionItemLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type FooterSectionItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum FooterSectionItemOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type FooterSectionItemsCollection = {
  __typename?: 'FooterSectionItemsCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type FooterSectionLinkingCollections = {
  __typename?: 'FooterSectionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type FooterSectionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum FooterSectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

/** [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/page) */
export type Page = Entry & {
  __typename?: 'Page';
  brand?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  country?: Maybe<Scalars['String']>;
  itemsCollection?: Maybe<PageItemsCollection>;
  linkedFrom?: Maybe<PageLinkingCollections>;
  rich?: Maybe<PageRich>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/page) */
export type PageBrandArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/page) */
export type PageCountryArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/page) */
export type PageItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/page) */
export type PageRichArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/page) */
export type PageSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/page) */
export type PageTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PageCollection = {
  __typename?: 'PageCollection';
  items: Array<Maybe<Page>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  brand?: InputMaybe<Scalars['String']>;
  brand_contains?: InputMaybe<Scalars['String']>;
  brand_exists?: InputMaybe<Scalars['Boolean']>;
  brand_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  brand_not?: InputMaybe<Scalars['String']>;
  brand_not_contains?: InputMaybe<Scalars['String']>;
  brand_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  country?: InputMaybe<Scalars['String']>;
  country_contains?: InputMaybe<Scalars['String']>;
  country_exists?: InputMaybe<Scalars['Boolean']>;
  country_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country_not?: InputMaybe<Scalars['String']>;
  country_not_contains?: InputMaybe<Scalars['String']>;
  country_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  itemsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  rich_contains?: InputMaybe<Scalars['String']>;
  rich_exists?: InputMaybe<Scalars['Boolean']>;
  rich_not_contains?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageItemsCollection = {
  __typename?: 'PageItemsCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageLinkingCollections = {
  __typename?: 'PageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageOrder {
  BrandAsc = 'brand_ASC',
  BrandDesc = 'brand_DESC',
  CountryAsc = 'country_ASC',
  CountryDesc = 'country_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type PageRich = {
  __typename?: 'PageRich';
  json: Scalars['JSON'];
  links: PageRichLinks;
};

export type PageRichAssets = {
  __typename?: 'PageRichAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PageRichEntries = {
  __typename?: 'PageRichEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PageRichLinks = {
  __typename?: 'PageRichLinks';
  assets: PageRichAssets;
  entries: PageRichEntries;
  resources: PageRichResources;
};

export type PageRichResources = {
  __typename?: 'PageRichResources';
  block: Array<ResourceLink>;
};

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  chef?: Maybe<Chef>;
  chefCollection?: Maybe<ChefCollection>;
  entryCollection?: Maybe<EntryCollection>;
  faqSection?: Maybe<FaqSection>;
  faqSectionCollection?: Maybe<FaqSectionCollection>;
  faqSectionItem?: Maybe<FaqSectionItem>;
  faqSectionItemCollection?: Maybe<FaqSectionItemCollection>;
  footerSection?: Maybe<FooterSection>;
  footerSectionCollection?: Maybe<FooterSectionCollection>;
  footerSectionItem?: Maybe<FooterSectionItem>;
  footerSectionItemCollection?: Maybe<FooterSectionItemCollection>;
  page?: Maybe<Page>;
  pageCollection?: Maybe<PageCollection>;
  recipe?: Maybe<Recipe>;
  recipeCollection?: Maybe<RecipeCollection>;
  settings?: Maybe<Settings>;
  settingsCollection?: Maybe<SettingsCollection>;
  staticPage?: Maybe<StaticPage>;
  staticPageCollection?: Maybe<StaticPageCollection>;
  tag?: Maybe<Tag>;
  tagCollection?: Maybe<TagCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryChefArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryChefCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ChefOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChefFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryFaqSectionArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryFaqSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FaqSectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FaqSectionFilter>;
};


export type QueryFaqSectionItemArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryFaqSectionItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FaqSectionItemOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FaqSectionItemFilter>;
};


export type QueryFooterSectionArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryFooterSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FooterSectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FooterSectionFilter>;
};


export type QueryFooterSectionItemArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryFooterSectionItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FooterSectionItemOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FooterSectionItemFilter>;
};


export type QueryPageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageFilter>;
};


export type QueryRecipeArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryRecipeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<RecipeOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RecipeFilter>;
};


export type QuerySettingsArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySettingsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SettingsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SettingsFilter>;
};


export type QueryStaticPageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryStaticPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<StaticPageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StaticPageFilter>;
};


export type QueryTagArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTagCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TagOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagFilter>;
};

/** This is the recipe content type [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/recipe) */
export type Recipe = Entry & {
  __typename?: 'Recipe';
  calories?: Maybe<Scalars['Int']>;
  chef?: Maybe<Chef>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<RecipeLinkingCollections>;
  photo?: Maybe<Asset>;
  sys: Sys;
  tagsCollection?: Maybe<RecipeTagsCollection>;
  title?: Maybe<Scalars['String']>;
};


/** This is the recipe content type [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/recipe) */
export type RecipeCaloriesArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the recipe content type [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/recipe) */
export type RecipeChefArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ChefFilter>;
};


/** This is the recipe content type [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/recipe) */
export type RecipeDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the recipe content type [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/recipe) */
export type RecipeLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** This is the recipe content type [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/recipe) */
export type RecipePhotoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** This is the recipe content type [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/recipe) */
export type RecipeTagsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<RecipeTagsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagFilter>;
};


/** This is the recipe content type [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/recipe) */
export type RecipeTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type RecipeCollection = {
  __typename?: 'RecipeCollection';
  items: Array<Maybe<Recipe>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type RecipeFilter = {
  AND?: InputMaybe<Array<InputMaybe<RecipeFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<RecipeFilter>>>;
  calories?: InputMaybe<Scalars['Int']>;
  calories_exists?: InputMaybe<Scalars['Boolean']>;
  calories_gt?: InputMaybe<Scalars['Int']>;
  calories_gte?: InputMaybe<Scalars['Int']>;
  calories_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  calories_lt?: InputMaybe<Scalars['Int']>;
  calories_lte?: InputMaybe<Scalars['Int']>;
  calories_not?: InputMaybe<Scalars['Int']>;
  calories_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  chef?: InputMaybe<CfChefNestedFilter>;
  chef_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  photo_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  tags?: InputMaybe<CfTagNestedFilter>;
  tagsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type RecipeLinkingCollections = {
  __typename?: 'RecipeLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type RecipeLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum RecipeOrder {
  CaloriesAsc = 'calories_ASC',
  CaloriesDesc = 'calories_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type RecipeTagsCollection = {
  __typename?: 'RecipeTagsCollection';
  items: Array<Maybe<Tag>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum RecipeTagsCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ResourceLink = {
  __typename?: 'ResourceLink';
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String'];
  type: Scalars['String'];
  urn: Scalars['String'];
};

/** [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/settings) */
export type Settings = Entry & {
  __typename?: 'Settings';
  brand?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  country?: Maybe<Scalars['String']>;
  footerCollection?: Maybe<SettingsFooterCollection>;
  linkedFrom?: Maybe<SettingsLinkingCollections>;
  navigationCollection?: Maybe<SettingsNavigationCollection>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/settings) */
export type SettingsBrandArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/settings) */
export type SettingsCountryArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/settings) */
export type SettingsFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/settings) */
export type SettingsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/settings) */
export type SettingsNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SettingsCollection = {
  __typename?: 'SettingsCollection';
  items: Array<Maybe<Settings>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SettingsFilter = {
  AND?: InputMaybe<Array<InputMaybe<SettingsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SettingsFilter>>>;
  brand?: InputMaybe<Scalars['String']>;
  brand_contains?: InputMaybe<Scalars['String']>;
  brand_exists?: InputMaybe<Scalars['Boolean']>;
  brand_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  brand_not?: InputMaybe<Scalars['String']>;
  brand_not_contains?: InputMaybe<Scalars['String']>;
  brand_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  country?: InputMaybe<Scalars['String']>;
  country_contains?: InputMaybe<Scalars['String']>;
  country_exists?: InputMaybe<Scalars['Boolean']>;
  country_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country_not?: InputMaybe<Scalars['String']>;
  country_not_contains?: InputMaybe<Scalars['String']>;
  country_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  footerCollection_exists?: InputMaybe<Scalars['Boolean']>;
  navigationCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type SettingsFooterCollection = {
  __typename?: 'SettingsFooterCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SettingsLinkingCollections = {
  __typename?: 'SettingsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type SettingsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SettingsNavigationCollection = {
  __typename?: 'SettingsNavigationCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum SettingsOrder {
  BrandAsc = 'brand_ASC',
  BrandDesc = 'brand_DESC',
  CountryAsc = 'country_ASC',
  CountryDesc = 'country_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** The definition of a static Page [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/staticPage) */
export type StaticPage = Entry & {
  __typename?: 'StaticPage';
  body?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  country?: Maybe<Scalars['String']>;
  css?: Maybe<Scalars['String']>;
  javascript?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<StaticPageLinkingCollections>;
  rich?: Maybe<StaticPageRich>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** The definition of a static Page [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/staticPage) */
export type StaticPageBodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** The definition of a static Page [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/staticPage) */
export type StaticPageBrandArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** The definition of a static Page [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/staticPage) */
export type StaticPageCountryArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** The definition of a static Page [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/staticPage) */
export type StaticPageCssArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** The definition of a static Page [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/staticPage) */
export type StaticPageJavascriptArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** The definition of a static Page [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/staticPage) */
export type StaticPageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** The definition of a static Page [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/staticPage) */
export type StaticPageRichArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** The definition of a static Page [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/staticPage) */
export type StaticPageSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type StaticPageCollection = {
  __typename?: 'StaticPageCollection';
  items: Array<Maybe<StaticPage>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type StaticPageFilter = {
  AND?: InputMaybe<Array<InputMaybe<StaticPageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<StaticPageFilter>>>;
  body?: InputMaybe<Scalars['String']>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  body_not?: InputMaybe<Scalars['String']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  body_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  brand?: InputMaybe<Scalars['String']>;
  brand_contains?: InputMaybe<Scalars['String']>;
  brand_exists?: InputMaybe<Scalars['Boolean']>;
  brand_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  brand_not?: InputMaybe<Scalars['String']>;
  brand_not_contains?: InputMaybe<Scalars['String']>;
  brand_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  country?: InputMaybe<Scalars['String']>;
  country_contains?: InputMaybe<Scalars['String']>;
  country_exists?: InputMaybe<Scalars['Boolean']>;
  country_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country_not?: InputMaybe<Scalars['String']>;
  country_not_contains?: InputMaybe<Scalars['String']>;
  country_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  css?: InputMaybe<Scalars['String']>;
  css_contains?: InputMaybe<Scalars['String']>;
  css_exists?: InputMaybe<Scalars['Boolean']>;
  css_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  css_not?: InputMaybe<Scalars['String']>;
  css_not_contains?: InputMaybe<Scalars['String']>;
  css_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  javascript?: InputMaybe<Scalars['String']>;
  javascript_contains?: InputMaybe<Scalars['String']>;
  javascript_exists?: InputMaybe<Scalars['Boolean']>;
  javascript_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  javascript_not?: InputMaybe<Scalars['String']>;
  javascript_not_contains?: InputMaybe<Scalars['String']>;
  javascript_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rich_contains?: InputMaybe<Scalars['String']>;
  rich_exists?: InputMaybe<Scalars['Boolean']>;
  rich_not_contains?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type StaticPageLinkingCollections = {
  __typename?: 'StaticPageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type StaticPageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum StaticPageOrder {
  BrandAsc = 'brand_ASC',
  BrandDesc = 'brand_DESC',
  CountryAsc = 'country_ASC',
  CountryDesc = 'country_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type StaticPageRich = {
  __typename?: 'StaticPageRich';
  json: Scalars['JSON'];
  links: StaticPageRichLinks;
};

export type StaticPageRichAssets = {
  __typename?: 'StaticPageRichAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type StaticPageRichEntries = {
  __typename?: 'StaticPageRichEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type StaticPageRichLinks = {
  __typename?: 'StaticPageRichLinks';
  assets: StaticPageRichAssets;
  entries: StaticPageRichEntries;
  resources: StaticPageRichResources;
};

export type StaticPageRichResources = {
  __typename?: 'StaticPageRichResources';
  block: Array<ResourceLink>;
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/tag) */
export type Tag = Entry & {
  __typename?: 'Tag';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<TagLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/tag) */
export type TagLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/kk2bw5ojx476/content_types/tag) */
export type TagNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TagCollection = {
  __typename?: 'TagCollection';
  items: Array<Maybe<Tag>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TagFilter = {
  AND?: InputMaybe<Array<InputMaybe<TagFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TagFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type TagLinkingCollections = {
  __typename?: 'TagLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  recipeCollection?: Maybe<RecipeCollection>;
};


export type TagLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TagLinkingCollectionsRecipeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TagLinkingCollectionsRecipeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TagLinkingCollectionsRecipeCollectionOrder {
  CaloriesAsc = 'calories_ASC',
  CaloriesDesc = 'calories_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum TagOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type CfChefNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfChefNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfChefNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfTagNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTagNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTagNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type RecipeCollectionQueryVariables = Exact<{ [key: string]: never; }>;


export type RecipeCollectionQuery = { __typename?: 'Query', recipeCollection?: { __typename?: 'RecipeCollection', total: number, limit: number, items: Array<{ __typename?: 'Recipe', title?: string | null, description?: string | null, photo?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null, title?: string | null } | null, sys: { __typename?: 'Sys', id: string } } | null> } | null };

export type GetRecipeByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetRecipeByIdQuery = { __typename?: 'Query', recipe?: { __typename?: 'Recipe', title?: string | null, description?: string | null, photo?: { __typename?: 'Asset', height?: number | null, width?: number | null, url?: string | null, title?: string | null } | null, chef?: { __typename?: 'Chef', name?: string | null } | null, tagsCollection?: { __typename?: 'RecipeTagsCollection', items: Array<{ __typename?: 'Tag', name?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null } | null };


export const RecipeCollectionDocument = gql`
    query recipeCollection {
  recipeCollection {
    total
    limit
    items {
      photo {
        url
        width
        height
        title
      }
      title
      description
      sys {
        id
      }
    }
  }
}
    `;
export const GetRecipeByIdDocument = gql`
    query getRecipeById($id: String!) {
  recipe(id: $id) {
    title
    description
    photo {
      height
      width
      url
      title
    }
    chef {
      name
    }
    tagsCollection {
      items {
        name
        sys {
          id
        }
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    recipeCollection(variables?: RecipeCollectionQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RecipeCollectionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<RecipeCollectionQuery>(RecipeCollectionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'recipeCollection', 'query');
    },
    getRecipeById(variables: GetRecipeByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetRecipeByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetRecipeByIdQuery>(GetRecipeByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getRecipeById', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
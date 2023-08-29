export interface EventType {
  metadata: Metadata;
  sys:      EventPhotoSys;
  fields:   EventFields;
}

export interface EventFields {
  title:              string;
  description:        string;
  city:               string;
  country:            string;
  startDateAndTime:   string;
  endDateAndTime:     string;
  participantsPhotos: Photo[];
  eventPhoto:         Photo;
}

export interface Photo {
  metadata: Metadata;
  sys:      EventPhotoSys;
  fields:   EventPhotoFields;
}

export interface EventPhotoFields {
  title:       string;
  description: string;
  file:        File;
}

export interface File {
  url:         string;
  details:     Details;
  fileName:    string;
  contentType: string;
}

export interface Details {
  size:  number;
  image: Image;
}

export interface Image {
  width:  number;
  height: number;
}

export interface Metadata {
  tags: any[];
}

export interface EventPhotoSys {
  space:        ContentType;
  id:           string;
  type:         string;
  createdAt:    Date;
  updatedAt:    Date;
  environment:  ContentType;
  revision:     number;
  locale:       string;
  contentType?: ContentType;
}

export interface ContentType {
  sys: ContentTypeSys;
}

export interface ContentTypeSys {
  id:       ID;
  type:     Type;
  linkType: LinkType;
}

export enum ID {
  Event = "event",
  Master = "master",
  The5L8Yfs1Cd3SD = "5l8yfs1cd3sd",
}

export enum LinkType {
  ContentType = "ContentType",
  Environment = "Environment",
  Space = "Space",
}

export enum Type {
  Link = "Link",
}

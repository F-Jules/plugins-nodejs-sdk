import { Option } from '../../../utils';
import {
  AdLayoutPropertyResource,
  AssetFilePropertyResource,
  AssetFolderPropertyResource,
  BooleanPropertyResource,
  DataFilePropertyResource,
  DoublePropertyResource,
  IdentifyingResourceListPropertyResource,
  IntPropertyResource,
  NativeDataPropertyResource,
  NativeImagePropertyResource,
  NativeTitlePropertyResource,
  PixelTagPropertyResource,
  RecommenderPropertyResource,
  StringPropertyResource,
  StyleSheetPropertyResource,
  UrlPropertyResource,
} from './ValueInterface';

export interface PluginPropertyResponse {
  status: string;
  data: PluginProperty[];
  count: number;
}

export type PluginProperty =
  | AssetFileProperty
  | AssetFolderProperty
  | DataFileProperty
  | UrlProperty
  | StringProperty
  | AdLayoutProperty
  | StyleSheetProperty
  | PixelTagProperty
  | DoubleProperty
  | BooleanProperty
  | IntProperty
  | RecommenderProperty
  | NativeDataProperty
  | NativeTitleProperty
  | NativeImageProperty
  | IdentifyingResourceListProperty;

export type PropertyType =
  | 'ASSET'
  | 'ASSET_FOLDER'
  | 'ASSET_FILE'
  | 'DATA_FILE'
  | 'URL'
  | 'STRING'
  | 'AD_LAYOUT'
  | 'STYLE_SHEET'
  | 'PIXEL_TAG'
  | 'DOUBLE'
  | 'BOOLEAN'
  | 'INT'
  | 'RECOMMENDER'
  | 'NATIVE_DATA'
  | 'NATIVE_TITLE'
  | 'NATIVE_IMAGE';

export type PropertyOrigin = 'PLUGIN_STATIC' | 'PLUGIN' | 'INSTANCE';

export interface AbstractProperty {
  technical_name: string;
  origin: PropertyOrigin;
  writable: boolean;
  deletable: boolean;
}

export interface AssetFileProperty extends AbstractProperty {
  property_type: 'ASSET_FILE' | 'ASSET';
  value: AssetFilePropertyResource;
}

export interface AssetFolderProperty extends AbstractProperty {
  property_type: 'ASSET_FOLDER';
  value: AssetFolderPropertyResource;
}

export interface DataFileProperty extends AbstractProperty {
  property_type: 'DATA_FILE';
  value: DataFilePropertyResource;
}

export interface UrlProperty extends AbstractProperty {
  property_type: 'URL';
  value: UrlPropertyResource;
}

export interface StringProperty extends AbstractProperty {
  property_type: 'STRING';
  value: StringPropertyResource;
}

export interface AdLayoutProperty extends AbstractProperty {
  property_type: 'AD_LAYOUT';
  value: AdLayoutPropertyResource;
}

export interface StyleSheetProperty extends AbstractProperty {
  property_type: 'STYLE_SHEET';
  value: StyleSheetPropertyResource;
}

export interface PixelTagProperty extends AbstractProperty {
  property_type: 'PIXEL_TAG';
  value: PixelTagPropertyResource;
}

export interface DoubleProperty extends AbstractProperty {
  property_type: 'DOUBLE';
  value: DoublePropertyResource;
}

export interface BooleanProperty extends AbstractProperty {
  property_type: 'BOOLEAN';
  value: BooleanPropertyResource;
}

export interface IntProperty extends AbstractProperty {
  property_type: 'INT';
  value: IntPropertyResource;
}

export interface RecommenderProperty extends AbstractProperty {
  property_type: 'RECOMMENDER';
  value: RecommenderPropertyResource;
}

export interface NativeDataProperty extends AbstractProperty {
  property_type: 'NATIVE_DATA';
  value: NativeDataPropertyResource;
}

export interface NativeTitleProperty extends AbstractProperty {
  property_type: 'NATIVE_TITLE';
  value: NativeTitlePropertyResource;
}

export interface NativeImageProperty extends AbstractProperty {
  property_type: 'NATIVE_IMAGE';
  value: NativeImagePropertyResource;
}

export interface IdentifyingResourceListProperty extends AbstractProperty {
  property_type: 'IDENTIFYING_RESOURCE_LIST';
  value: IdentifyingResourceListPropertyResource;
}

export const asBooleanProperty = (p: PluginProperty): Option<BooleanProperty> => {
  return p.property_type === 'BOOLEAN' ? p : undefined;
};

export const asAssetFileProperty = (p: PluginProperty): Option<AssetFileProperty> => {
  return p.property_type === 'ASSET_FILE' || p.property_type === 'ASSET' ? p : undefined;
};

export const asAssetFolderProperty = (p: PluginProperty): Option<AssetFolderProperty> => {
  return p.property_type === 'ASSET_FOLDER' ? p : undefined;
};

export const asDataFileProperty = (p: PluginProperty): Option<DataFileProperty> => {
  return p.property_type === 'DATA_FILE' ? p : undefined;
};

export const asAdLayoutProperty = (p: PluginProperty): Option<AdLayoutProperty> => {
  return p.property_type === 'AD_LAYOUT' ? p : undefined;
};

export const asUrlProperty = (p: PluginProperty): Option<UrlProperty> => {
  return p.property_type === 'URL' ? p : undefined;
};

export const asRecommenderProperty = (p: PluginProperty): Option<RecommenderProperty> => {
  return p.property_type === 'RECOMMENDER' ? p : undefined;
};

export const asStringProperty = (p: PluginProperty): Option<StringProperty> => {
  return p.property_type === 'STRING' ? p : undefined;
};

export const asNativeDataProperty = (p: PluginProperty): Option<NativeDataProperty> => {
  return p.property_type === 'NATIVE_DATA' ? p : undefined;
};

export const asNativeTitleProperty = (p: PluginProperty): Option<NativeTitleProperty> => {
  return p.property_type === 'NATIVE_TITLE' ? p : undefined;
};

export const asNativeImageProperty = (p: PluginProperty): Option<NativeImageProperty> => {
  return p.property_type === 'NATIVE_IMAGE' ? p : undefined;
};

export const asIdentifyingResourceListProperty = (p: PluginProperty): Option<IdentifyingResourceListProperty> => {
  return p.property_type === 'IDENTIFYING_RESOURCE_LIST' ? p : undefined;
};

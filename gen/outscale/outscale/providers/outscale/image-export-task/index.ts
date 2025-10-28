// https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/image_export_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImageExportTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/image_export_task#id ImageExportTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/image_export_task#image_id ImageExportTask#image_id}
  */
  readonly imageId: string;
  /**
  * osu_export block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/image_export_task#osu_export ImageExportTask#osu_export}
  */
  readonly osuExport: ImageExportTaskOsuExport[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/image_export_task#tags ImageExportTask#tags}
  */
  readonly tags?: ImageExportTaskTags[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/image_export_task#timeouts ImageExportTask#timeouts}
  */
  readonly timeouts?: ImageExportTaskTimeouts;
}
export interface ImageExportTaskOsuExportOsuApiKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/image_export_task#api_key_id ImageExportTask#api_key_id}
  */
  readonly apiKeyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/image_export_task#secret_key ImageExportTask#secret_key}
  */
  readonly secretKey: string;
}

export function imageExportTaskOsuExportOsuApiKeyToTerraform(struct?: ImageExportTaskOsuExportOsuApiKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key_id: cdktf.stringToTerraform(struct!.apiKeyId),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
  }
}


export function imageExportTaskOsuExportOsuApiKeyToHclTerraform(struct?: ImageExportTaskOsuExportOsuApiKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key_id: {
      value: cdktf.stringToHclTerraform(struct!.apiKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageExportTaskOsuExportOsuApiKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ImageExportTaskOsuExportOsuApiKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyId = this._apiKeyId;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageExportTaskOsuExportOsuApiKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKeyId = undefined;
      this._secretKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKeyId = value.apiKeyId;
      this._secretKey = value.secretKey;
    }
  }

  // api_key_id - computed: false, optional: false, required: true
  private _apiKeyId?: string; 
  public get apiKeyId() {
    return this.getStringAttribute('api_key_id');
  }
  public set apiKeyId(value: string) {
    this._apiKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyIdInput() {
    return this._apiKeyId;
  }

  // secret_key - computed: false, optional: false, required: true
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }
}

export class ImageExportTaskOsuExportOsuApiKeyList extends cdktf.ComplexList {
  public internalValue? : ImageExportTaskOsuExportOsuApiKey[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ImageExportTaskOsuExportOsuApiKeyOutputReference {
    return new ImageExportTaskOsuExportOsuApiKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImageExportTaskOsuExport {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/image_export_task#disk_image_format ImageExportTask#disk_image_format}
  */
  readonly diskImageFormat: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/image_export_task#osu_bucket ImageExportTask#osu_bucket}
  */
  readonly osuBucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/image_export_task#osu_manifest_url ImageExportTask#osu_manifest_url}
  */
  readonly osuManifestUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/image_export_task#osu_prefix ImageExportTask#osu_prefix}
  */
  readonly osuPrefix?: string;
  /**
  * osu_api_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/image_export_task#osu_api_key ImageExportTask#osu_api_key}
  */
  readonly osuApiKey?: ImageExportTaskOsuExportOsuApiKey[] | cdktf.IResolvable;
}

export function imageExportTaskOsuExportToTerraform(struct?: ImageExportTaskOsuExport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_image_format: cdktf.stringToTerraform(struct!.diskImageFormat),
    osu_bucket: cdktf.stringToTerraform(struct!.osuBucket),
    osu_manifest_url: cdktf.stringToTerraform(struct!.osuManifestUrl),
    osu_prefix: cdktf.stringToTerraform(struct!.osuPrefix),
    osu_api_key: cdktf.listMapper(imageExportTaskOsuExportOsuApiKeyToTerraform, true)(struct!.osuApiKey),
  }
}


export function imageExportTaskOsuExportToHclTerraform(struct?: ImageExportTaskOsuExport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_image_format: {
      value: cdktf.stringToHclTerraform(struct!.diskImageFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    osu_bucket: {
      value: cdktf.stringToHclTerraform(struct!.osuBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    osu_manifest_url: {
      value: cdktf.stringToHclTerraform(struct!.osuManifestUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    osu_prefix: {
      value: cdktf.stringToHclTerraform(struct!.osuPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    osu_api_key: {
      value: cdktf.listMapperHcl(imageExportTaskOsuExportOsuApiKeyToHclTerraform, true)(struct!.osuApiKey),
      isBlock: true,
      type: "list",
      storageClassType: "ImageExportTaskOsuExportOsuApiKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageExportTaskOsuExportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ImageExportTaskOsuExport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskImageFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskImageFormat = this._diskImageFormat;
    }
    if (this._osuBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.osuBucket = this._osuBucket;
    }
    if (this._osuManifestUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.osuManifestUrl = this._osuManifestUrl;
    }
    if (this._osuPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.osuPrefix = this._osuPrefix;
    }
    if (this._osuApiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.osuApiKey = this._osuApiKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageExportTaskOsuExport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskImageFormat = undefined;
      this._osuBucket = undefined;
      this._osuManifestUrl = undefined;
      this._osuPrefix = undefined;
      this._osuApiKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskImageFormat = value.diskImageFormat;
      this._osuBucket = value.osuBucket;
      this._osuManifestUrl = value.osuManifestUrl;
      this._osuPrefix = value.osuPrefix;
      this._osuApiKey.internalValue = value.osuApiKey;
    }
  }

  // disk_image_format - computed: false, optional: false, required: true
  private _diskImageFormat?: string; 
  public get diskImageFormat() {
    return this.getStringAttribute('disk_image_format');
  }
  public set diskImageFormat(value: string) {
    this._diskImageFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskImageFormatInput() {
    return this._diskImageFormat;
  }

  // osu_bucket - computed: false, optional: false, required: true
  private _osuBucket?: string; 
  public get osuBucket() {
    return this.getStringAttribute('osu_bucket');
  }
  public set osuBucket(value: string) {
    this._osuBucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osuBucketInput() {
    return this._osuBucket;
  }

  // osu_manifest_url - computed: true, optional: true, required: false
  private _osuManifestUrl?: string; 
  public get osuManifestUrl() {
    return this.getStringAttribute('osu_manifest_url');
  }
  public set osuManifestUrl(value: string) {
    this._osuManifestUrl = value;
  }
  public resetOsuManifestUrl() {
    this._osuManifestUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osuManifestUrlInput() {
    return this._osuManifestUrl;
  }

  // osu_prefix - computed: false, optional: true, required: false
  private _osuPrefix?: string; 
  public get osuPrefix() {
    return this.getStringAttribute('osu_prefix');
  }
  public set osuPrefix(value: string) {
    this._osuPrefix = value;
  }
  public resetOsuPrefix() {
    this._osuPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osuPrefixInput() {
    return this._osuPrefix;
  }

  // osu_api_key - computed: false, optional: true, required: false
  private _osuApiKey = new ImageExportTaskOsuExportOsuApiKeyList(this, "osu_api_key", false);
  public get osuApiKey() {
    return this._osuApiKey;
  }
  public putOsuApiKey(value: ImageExportTaskOsuExportOsuApiKey[] | cdktf.IResolvable) {
    this._osuApiKey.internalValue = value;
  }
  public resetOsuApiKey() {
    this._osuApiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osuApiKeyInput() {
    return this._osuApiKey.internalValue;
  }
}

export class ImageExportTaskOsuExportList extends cdktf.ComplexList {
  public internalValue? : ImageExportTaskOsuExport[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ImageExportTaskOsuExportOutputReference {
    return new ImageExportTaskOsuExportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImageExportTaskTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/image_export_task#key ImageExportTask#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/image_export_task#value ImageExportTask#value}
  */
  readonly value?: string;
}

export function imageExportTaskTagsToTerraform(struct?: ImageExportTaskTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function imageExportTaskTagsToHclTerraform(struct?: ImageExportTaskTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageExportTaskTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ImageExportTaskTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageExportTaskTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ImageExportTaskTagsList extends cdktf.ComplexList {
  public internalValue? : ImageExportTaskTags[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ImageExportTaskTagsOutputReference {
    return new ImageExportTaskTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImageExportTaskTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/image_export_task#create ImageExportTask#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/image_export_task#delete ImageExportTask#delete}
  */
  readonly delete?: string;
}

export function imageExportTaskTimeoutsToTerraform(struct?: ImageExportTaskTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function imageExportTaskTimeoutsToHclTerraform(struct?: ImageExportTaskTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageExportTaskTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImageExportTaskTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageExportTaskTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/image_export_task outscale_image_export_task}
*/
export class ImageExportTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "outscale_image_export_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImageExportTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImageExportTask to import
  * @param importFromId The id of the existing ImageExportTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/image_export_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImageExportTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "outscale_image_export_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/image_export_task outscale_image_export_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImageExportTaskConfig
  */
  public constructor(scope: Construct, id: string, config: ImageExportTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'outscale_image_export_task',
      terraformGeneratorMetadata: {
        providerName: 'outscale',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._imageId = config.imageId;
    this._osuExport.internalValue = config.osuExport;
    this._tags.internalValue = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // image_id - computed: false, optional: false, required: true
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // progress - computed: true, optional: false, required: false
  public get progress() {
    return this.getNumberAttribute('progress');
  }

  // request_id - computed: true, optional: false, required: false
  public get requestId() {
    return this.getStringAttribute('request_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // osu_export - computed: false, optional: false, required: true
  private _osuExport = new ImageExportTaskOsuExportList(this, "osu_export", false);
  public get osuExport() {
    return this._osuExport;
  }
  public putOsuExport(value: ImageExportTaskOsuExport[] | cdktf.IResolvable) {
    this._osuExport.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osuExportInput() {
    return this._osuExport.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new ImageExportTaskTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ImageExportTaskTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ImageExportTaskTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ImageExportTaskTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      osu_export: cdktf.listMapper(imageExportTaskOsuExportToTerraform, true)(this._osuExport.internalValue),
      tags: cdktf.listMapper(imageExportTaskTagsToTerraform, true)(this._tags.internalValue),
      timeouts: imageExportTaskTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      osu_export: {
        value: cdktf.listMapperHcl(imageExportTaskOsuExportToHclTerraform, true)(this._osuExport.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ImageExportTaskOsuExportList",
      },
      tags: {
        value: cdktf.listMapperHcl(imageExportTaskTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ImageExportTaskTagsList",
      },
      timeouts: {
        value: imageExportTaskTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ImageExportTaskTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

// https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZedcloudEdgenodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * administrative state of device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#admin_state DataZedcloudEdgenode#admin_state}
  */
  readonly adminState?: string;
  /**
  * Device asset ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#asset_id DataZedcloudEdgenode#asset_id}
  */
  readonly assetId?: string;
  /**
  * device baseos retry counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#base_os_retry_counter DataZedcloudEdgenode#base_os_retry_counter}
  */
  readonly baseOsRetryCounter?: number;
  /**
  * device baseos retry time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#base_os_retry_time DataZedcloudEdgenode#base_os_retry_time}
  */
  readonly baseOsRetryTime?: string;
  /**
  * Client IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#client_ip DataZedcloudEdgenode#client_ip}
  */
  readonly clientIp?: string;
  /**
  * System defined universally unique clusterInstance ID, unique across the enterprise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#cluster_id DataZedcloudEdgenode#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * CPU (configured values)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#cpu DataZedcloudEdgenode#cpu}
  */
  readonly cpu?: number;
  /**
  * user defined tag for the device, which is used while deploying policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#deployment_tag DataZedcloudEdgenode#deployment_tag}
  */
  readonly deploymentTag?: string;
  /**
  * deprecated field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#deprecated DataZedcloudEdgenode#deprecated}
  */
  readonly deprecated?: string;
  /**
  * user specified description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#description DataZedcloudEdgenode#description}
  */
  readonly description?: string;
  /**
  * indicates whether a soft serial should be generated; it will work ONLY when device is created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#generate_soft_serial DataZedcloudEdgenode#generate_soft_serial}
  */
  readonly generateSoftSerial?: boolean | cdktf.IResolvable;
  /**
  * Device identity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#identity DataZedcloudEdgenode#identity}
  */
  readonly identity?: string;
  /**
  * Device location: deprecated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#location DataZedcloudEdgenode#location}
  */
  readonly location?: string;
  /**
  * Device memory in MBs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#memory DataZedcloudEdgenode#memory}
  */
  readonly memory?: number;
  /**
  * device model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#model_id DataZedcloudEdgenode#model_id}
  */
  readonly modelId: string;
  /**
  * user specified device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#name DataZedcloudEdgenode#name}
  */
  readonly name: string;
  /**
  * Object key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#onboarding_key DataZedcloudEdgenode#onboarding_key}
  */
  readonly onboardingKey?: string;
  /**
  * prepare poweroff counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#prepare_power_off_counter DataZedcloudEdgenode#prepare_power_off_counter}
  */
  readonly preparePowerOffCounter?: number;
  /**
  * prepare poweroff time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#prepare_power_off_time DataZedcloudEdgenode#prepare_power_off_time}
  */
  readonly preparePowerOffTime?: string;
  /**
  * project name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#project_id DataZedcloudEdgenode#project_id}
  */
  readonly projectId?: string;
  /**
  * devicereset counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#reset_counter DataZedcloudEdgenode#reset_counter}
  */
  readonly resetCounter?: number;
  /**
  * device reset time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#reset_time DataZedcloudEdgenode#reset_time}
  */
  readonly resetTime?: string;
  /**
  * Device serial number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#serialno DataZedcloudEdgenode#serialno}
  */
  readonly serialno?: string;
  /**
  * Site captured pictures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#site_pictures DataZedcloudEdgenode#site_pictures}
  */
  readonly sitePictures?: string[];
  /**
  * Device storage in GBs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#storage DataZedcloudEdgenode#storage}
  */
  readonly storage?: number;
  /**
  * Tags are name/value pairs that enable you to categorize resources. Tag names are case insensitive with max_length 512 and min_length 3. Tag values are case sensitive with max_length 256 and min_length 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#tags DataZedcloudEdgenode#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Threads
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#thread DataZedcloudEdgenode#thread}
  */
  readonly thread?: number;
  /**
  * user specified title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#title DataZedcloudEdgenode#title}
  */
  readonly title: string;
  /**
  * Single use token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#token DataZedcloudEdgenode#token}
  */
  readonly token?: string;
  /**
  * device model arch type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#utype DataZedcloudEdgenode#utype}
  */
  readonly utype?: string;
  /**
  * base_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#base_image DataZedcloudEdgenode#base_image}
  */
  readonly baseImage?: DataZedcloudEdgenodeBaseImage[] | cdktf.IResolvable;
  /**
  * config_item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#config_item DataZedcloudEdgenode#config_item}
  */
  readonly configItem?: DataZedcloudEdgenodeConfigItem[] | cdktf.IResolvable;
  /**
  * default_net_inst block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#default_net_inst DataZedcloudEdgenode#default_net_inst}
  */
  readonly defaultNetInst?: DataZedcloudEdgenodeDefaultNetInst[] | cdktf.IResolvable;
  /**
  * dev_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#dev_location DataZedcloudEdgenode#dev_location}
  */
  readonly devLocation?: DataZedcloudEdgenodeDevLocation[] | cdktf.IResolvable;
  /**
  * dlisp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#dlisp DataZedcloudEdgenode#dlisp}
  */
  readonly dlisp?: DataZedcloudEdgenodeDlisp[] | cdktf.IResolvable;
  /**
  * edgeviewconfig block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#edgeviewconfig DataZedcloudEdgenode#edgeviewconfig}
  */
  readonly edgeviewconfig?: DataZedcloudEdgenodeEdgeviewconfig[] | cdktf.IResolvable;
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#interfaces DataZedcloudEdgenode#interfaces}
  */
  readonly interfaces: DataZedcloudEdgenodeInterfaces[] | cdktf.IResolvable;
  /**
  * revision block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#revision DataZedcloudEdgenode#revision}
  */
  readonly revision?: DataZedcloudEdgenodeRevision[] | cdktf.IResolvable;
}
export interface DataZedcloudEdgenodeDebugKnob {
}

export function dataZedcloudEdgenodeDebugKnobToTerraform(struct?: DataZedcloudEdgenodeDebugKnob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudEdgenodeDebugKnobToHclTerraform(struct?: DataZedcloudEdgenodeDebugKnob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudEdgenodeDebugKnobOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudEdgenodeDebugKnob | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudEdgenodeDebugKnob | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // debug_knob - computed: true, optional: false, required: false
  public get debugKnob() {
    return this.getBooleanAttribute('debug_knob');
  }

  // expired - computed: true, optional: false, required: false
  public get expired() {
    return this.getBooleanAttribute('expired');
  }

  // expiry - computed: true, optional: false, required: false
  public get expiry() {
    return this.getStringAttribute('expiry');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataZedcloudEdgenodeDebugKnobList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudEdgenodeDebugKnobOutputReference {
    return new DataZedcloudEdgenodeDebugKnobOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudEdgenodeBaseImage {
  /**
  * activation flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#activate DataZedcloudEdgenode#activate}
  */
  readonly activate: boolean | cdktf.IResolvable;
  /**
  * image name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#image_name DataZedcloudEdgenode#image_name}
  */
  readonly imageName: string;
  /**
  * immutable Volume for this base image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#imvol_id DataZedcloudEdgenode#imvol_id}
  */
  readonly imvolId?: string;
  /**
  * system generated unique id for an image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#uuid DataZedcloudEdgenode#uuid}
  */
  readonly uuid?: string;
  /**
  * image version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#version DataZedcloudEdgenode#version}
  */
  readonly version: string;
}

export function dataZedcloudEdgenodeBaseImageToTerraform(struct?: DataZedcloudEdgenodeBaseImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activate: cdktf.booleanToTerraform(struct!.activate),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    imvol_id: cdktf.stringToTerraform(struct!.imvolId),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataZedcloudEdgenodeBaseImageToHclTerraform(struct?: DataZedcloudEdgenodeBaseImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activate: {
      value: cdktf.booleanToHclTerraform(struct!.activate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imvol_id: {
      value: cdktf.stringToHclTerraform(struct!.imvolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudEdgenodeBaseImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudEdgenodeBaseImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activate !== undefined) {
      hasAnyValues = true;
      internalValueResult.activate = this._activate;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._imvolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imvolId = this._imvolId;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudEdgenodeBaseImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activate = undefined;
      this._imageName = undefined;
      this._imvolId = undefined;
      this._uuid = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activate = value.activate;
      this._imageName = value.imageName;
      this._imvolId = value.imvolId;
      this._uuid = value.uuid;
      this._version = value.version;
    }
  }

  // activate - computed: false, optional: false, required: true
  private _activate?: boolean | cdktf.IResolvable; 
  public get activate() {
    return this.getBooleanAttribute('activate');
  }
  public set activate(value: boolean | cdktf.IResolvable) {
    this._activate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activateInput() {
    return this._activate;
  }

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // imvol_id - computed: false, optional: true, required: false
  private _imvolId?: string; 
  public get imvolId() {
    return this.getStringAttribute('imvol_id');
  }
  public set imvolId(value: string) {
    this._imvolId = value;
  }
  public resetImvolId() {
    this._imvolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imvolIdInput() {
    return this._imvolId;
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class DataZedcloudEdgenodeBaseImageList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudEdgenodeBaseImage[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudEdgenodeBaseImageOutputReference {
    return new DataZedcloudEdgenodeBaseImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudEdgenodeConfigItem {
  /**
  * boolean value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#bool_value DataZedcloudEdgenode#bool_value}
  */
  readonly boolValue?: boolean | cdktf.IResolvable;
  /**
  * float value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#float_value DataZedcloudEdgenode#float_value}
  */
  readonly floatValue?: number;
  /**
  * key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#key DataZedcloudEdgenode#key}
  */
  readonly key?: string;
  /**
  * string value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#string_value DataZedcloudEdgenode#string_value}
  */
  readonly stringValue?: string;
  /**
  * uint32 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#uint32_value DataZedcloudEdgenode#uint32_value}
  */
  readonly uint32Value?: number;
  /**
  * uint64 value in string format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#uint64_value DataZedcloudEdgenode#uint64_value}
  */
  readonly uint64Value?: string;
  /**
  * value type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#value_type DataZedcloudEdgenode#value_type}
  */
  readonly valueType?: string;
}

export function dataZedcloudEdgenodeConfigItemToTerraform(struct?: DataZedcloudEdgenodeConfigItem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bool_value: cdktf.booleanToTerraform(struct!.boolValue),
    float_value: cdktf.numberToTerraform(struct!.floatValue),
    key: cdktf.stringToTerraform(struct!.key),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    uint32_value: cdktf.numberToTerraform(struct!.uint32Value),
    uint64_value: cdktf.stringToTerraform(struct!.uint64Value),
    value_type: cdktf.stringToTerraform(struct!.valueType),
  }
}


export function dataZedcloudEdgenodeConfigItemToHclTerraform(struct?: DataZedcloudEdgenodeConfigItem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bool_value: {
      value: cdktf.booleanToHclTerraform(struct!.boolValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    float_value: {
      value: cdktf.numberToHclTerraform(struct!.floatValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uint32_value: {
      value: cdktf.numberToHclTerraform(struct!.uint32Value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uint64_value: {
      value: cdktf.stringToHclTerraform(struct!.uint64Value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_type: {
      value: cdktf.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudEdgenodeConfigItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudEdgenodeConfigItem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boolValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.boolValue = this._boolValue;
    }
    if (this._floatValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatValue = this._floatValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._uint32Value !== undefined) {
      hasAnyValues = true;
      internalValueResult.uint32Value = this._uint32Value;
    }
    if (this._uint64Value !== undefined) {
      hasAnyValues = true;
      internalValueResult.uint64Value = this._uint64Value;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudEdgenodeConfigItem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boolValue = undefined;
      this._floatValue = undefined;
      this._key = undefined;
      this._stringValue = undefined;
      this._uint32Value = undefined;
      this._uint64Value = undefined;
      this._valueType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boolValue = value.boolValue;
      this._floatValue = value.floatValue;
      this._key = value.key;
      this._stringValue = value.stringValue;
      this._uint32Value = value.uint32Value;
      this._uint64Value = value.uint64Value;
      this._valueType = value.valueType;
    }
  }

  // bool_value - computed: false, optional: true, required: false
  private _boolValue?: boolean | cdktf.IResolvable; 
  public get boolValue() {
    return this.getBooleanAttribute('bool_value');
  }
  public set boolValue(value: boolean | cdktf.IResolvable) {
    this._boolValue = value;
  }
  public resetBoolValue() {
    this._boolValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boolValueInput() {
    return this._boolValue;
  }

  // float_value - computed: false, optional: true, required: false
  private _floatValue?: number; 
  public get floatValue() {
    return this.getNumberAttribute('float_value');
  }
  public set floatValue(value: number) {
    this._floatValue = value;
  }
  public resetFloatValue() {
    this._floatValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatValueInput() {
    return this._floatValue;
  }

  // key - computed: false, optional: true, required: false
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

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // uint32_value - computed: false, optional: true, required: false
  private _uint32Value?: number; 
  public get uint32Value() {
    return this.getNumberAttribute('uint32_value');
  }
  public set uint32Value(value: number) {
    this._uint32Value = value;
  }
  public resetUint32Value() {
    this._uint32Value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uint32ValueInput() {
    return this._uint32Value;
  }

  // uint64_value - computed: false, optional: true, required: false
  private _uint64Value?: string; 
  public get uint64Value() {
    return this.getStringAttribute('uint64_value');
  }
  public set uint64Value(value: string) {
    this._uint64Value = value;
  }
  public resetUint64Value() {
    this._uint64Value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uint64ValueInput() {
    return this._uint64Value;
  }

  // value_type - computed: false, optional: true, required: false
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  public resetValueType() {
    this._valueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }
}

export class DataZedcloudEdgenodeConfigItemList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudEdgenodeConfigItem[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudEdgenodeConfigItemOutputReference {
    return new DataZedcloudEdgenodeConfigItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudEdgenodeDefaultNetInstLispSp {
}

export function dataZedcloudEdgenodeDefaultNetInstLispSpToTerraform(struct?: DataZedcloudEdgenodeDefaultNetInstLispSp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudEdgenodeDefaultNetInstLispSpToHclTerraform(struct?: DataZedcloudEdgenodeDefaultNetInstLispSp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudEdgenodeDefaultNetInstLispSpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudEdgenodeDefaultNetInstLispSp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudEdgenodeDefaultNetInstLispSp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credential - computed: true, optional: false, required: false
  public get credential() {
    return this.getStringAttribute('credential');
  }

  // name_or_ip - computed: true, optional: false, required: false
  public get nameOrIp() {
    return this.getStringAttribute('name_or_ip');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataZedcloudEdgenodeDefaultNetInstLispSpList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudEdgenodeDefaultNetInstLispSpOutputReference {
    return new DataZedcloudEdgenodeDefaultNetInstLispSpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudEdgenodeDefaultNetInstLisp {
}

export function dataZedcloudEdgenodeDefaultNetInstLispToTerraform(struct?: DataZedcloudEdgenodeDefaultNetInstLisp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudEdgenodeDefaultNetInstLispToHclTerraform(struct?: DataZedcloudEdgenodeDefaultNetInstLisp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudEdgenodeDefaultNetInstLispOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudEdgenodeDefaultNetInstLisp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudEdgenodeDefaultNetInstLisp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocate - computed: true, optional: false, required: false
  public get allocate() {
    return this.getBooleanAttribute('allocate');
  }

  // allocationprefix - computed: true, optional: false, required: false
  public get allocationprefix() {
    return this.getStringAttribute('allocationprefix');
  }

  // allocationprefixlen - computed: true, optional: false, required: false
  public get allocationprefixlen() {
    return this.getNumberAttribute('allocationprefixlen');
  }

  // exportprivate - computed: true, optional: false, required: false
  public get exportprivate() {
    return this.getBooleanAttribute('exportprivate');
  }

  // lispiid - computed: true, optional: false, required: false
  public get lispiid() {
    return this.getNumberAttribute('lispiid');
  }

  // sp - computed: true, optional: false, required: false
  private _sp = new DataZedcloudEdgenodeDefaultNetInstLispSpList(this, "sp", false);
  public get sp() {
    return this._sp;
  }
}

export class DataZedcloudEdgenodeDefaultNetInstLispList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudEdgenodeDefaultNetInstLispOutputReference {
    return new DataZedcloudEdgenodeDefaultNetInstLispOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudEdgenodeDefaultNetInstRevision {
}

export function dataZedcloudEdgenodeDefaultNetInstRevisionToTerraform(struct?: DataZedcloudEdgenodeDefaultNetInstRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudEdgenodeDefaultNetInstRevisionToHclTerraform(struct?: DataZedcloudEdgenodeDefaultNetInstRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudEdgenodeDefaultNetInstRevisionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudEdgenodeDefaultNetInstRevision | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudEdgenodeDefaultNetInstRevision | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // curr - computed: true, optional: false, required: false
  public get curr() {
    return this.getStringAttribute('curr');
  }

  // prev - computed: true, optional: false, required: false
  public get prev() {
    return this.getStringAttribute('prev');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
}

export class DataZedcloudEdgenodeDefaultNetInstRevisionList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudEdgenodeDefaultNetInstRevisionOutputReference {
    return new DataZedcloudEdgenodeDefaultNetInstRevisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudEdgenodeDefaultNetInstDnsListStruct {
  /**
  * Addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#addrs DataZedcloudEdgenode#addrs}
  */
  readonly addrs?: string[];
  /**
  * Host name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#hostname DataZedcloudEdgenode#hostname}
  */
  readonly hostname?: string;
}

export function dataZedcloudEdgenodeDefaultNetInstDnsListStructToTerraform(struct?: DataZedcloudEdgenodeDefaultNetInstDnsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addrs),
    hostname: cdktf.stringToTerraform(struct!.hostname),
  }
}


export function dataZedcloudEdgenodeDefaultNetInstDnsListStructToHclTerraform(struct?: DataZedcloudEdgenodeDefaultNetInstDnsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudEdgenodeDefaultNetInstDnsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudEdgenodeDefaultNetInstDnsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrs = this._addrs;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudEdgenodeDefaultNetInstDnsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addrs = undefined;
      this._hostname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addrs = value.addrs;
      this._hostname = value.hostname;
    }
  }

  // addrs - computed: false, optional: true, required: false
  private _addrs?: string[]; 
  public get addrs() {
    return this.getListAttribute('addrs');
  }
  public set addrs(value: string[]) {
    this._addrs = value;
  }
  public resetAddrs() {
    this._addrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrsInput() {
    return this._addrs;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }
}

export class DataZedcloudEdgenodeDefaultNetInstDnsListStructList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudEdgenodeDefaultNetInstDnsListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudEdgenodeDefaultNetInstDnsListStructOutputReference {
    return new DataZedcloudEdgenodeDefaultNetInstDnsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudEdgenodeDefaultNetInstEdgeNodeCluster {
  /**
  * Id of the designated Edge Node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#designated_node_id DataZedcloudEdgenode#designated_node_id}
  */
  readonly designatedNodeId?: string;
  /**
  * Id of the Edge Node Cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#id DataZedcloudEdgenode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataZedcloudEdgenodeDefaultNetInstEdgeNodeClusterToTerraform(struct?: DataZedcloudEdgenodeDefaultNetInstEdgeNodeCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    designated_node_id: cdktf.stringToTerraform(struct!.designatedNodeId),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataZedcloudEdgenodeDefaultNetInstEdgeNodeClusterToHclTerraform(struct?: DataZedcloudEdgenodeDefaultNetInstEdgeNodeCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    designated_node_id: {
      value: cdktf.stringToHclTerraform(struct!.designatedNodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudEdgenodeDefaultNetInstEdgeNodeClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudEdgenodeDefaultNetInstEdgeNodeCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._designatedNodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.designatedNodeId = this._designatedNodeId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudEdgenodeDefaultNetInstEdgeNodeCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._designatedNodeId = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._designatedNodeId = value.designatedNodeId;
      this._id = value.id;
    }
  }

  // designated_node_id - computed: false, optional: true, required: false
  private _designatedNodeId?: string; 
  public get designatedNodeId() {
    return this.getStringAttribute('designated_node_id');
  }
  public set designatedNodeId(value: string) {
    this._designatedNodeId = value;
  }
  public resetDesignatedNodeId() {
    this._designatedNodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get designatedNodeIdInput() {
    return this._designatedNodeId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class DataZedcloudEdgenodeDefaultNetInstEdgeNodeClusterList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudEdgenodeDefaultNetInstEdgeNodeCluster[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudEdgenodeDefaultNetInstEdgeNodeClusterOutputReference {
    return new DataZedcloudEdgenodeDefaultNetInstEdgeNodeClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudEdgenodeDefaultNetInstIpDhcpRange {
  /**
  * ending IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#end DataZedcloudEdgenode#end}
  */
  readonly end?: string;
  /**
  * starting IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#start DataZedcloudEdgenode#start}
  */
  readonly start?: string;
}

export function dataZedcloudEdgenodeDefaultNetInstIpDhcpRangeToTerraform(struct?: DataZedcloudEdgenodeDefaultNetInstIpDhcpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function dataZedcloudEdgenodeDefaultNetInstIpDhcpRangeToHclTerraform(struct?: DataZedcloudEdgenodeDefaultNetInstIpDhcpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudEdgenodeDefaultNetInstIpDhcpRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudEdgenodeDefaultNetInstIpDhcpRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudEdgenodeDefaultNetInstIpDhcpRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class DataZedcloudEdgenodeDefaultNetInstIpDhcpRangeList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudEdgenodeDefaultNetInstIpDhcpRange[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudEdgenodeDefaultNetInstIpDhcpRangeOutputReference {
    return new DataZedcloudEdgenodeDefaultNetInstIpDhcpRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudEdgenodeDefaultNetInstIp {
  /**
  * IP Addresses of DNS servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#dns DataZedcloudEdgenode#dns}
  */
  readonly dns?: string[];
  /**
  * Network domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#domain DataZedcloudEdgenode#domain}
  */
  readonly domain?: string;
  /**
  * IP Address of Network Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#gateway DataZedcloudEdgenode#gateway}
  */
  readonly gateway?: string;
  /**
  * Subnet Mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#mask DataZedcloudEdgenode#mask}
  */
  readonly mask?: string;
  /**
  * IP Address of NTP Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#ntp DataZedcloudEdgenode#ntp}
  */
  readonly ntp?: string;
  /**
  * Subnet address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#subnet DataZedcloudEdgenode#subnet}
  */
  readonly subnet?: string;
  /**
  * dhcp_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#dhcp_range DataZedcloudEdgenode#dhcp_range}
  */
  readonly dhcpRange?: DataZedcloudEdgenodeDefaultNetInstIpDhcpRange[] | cdktf.IResolvable;
}

export function dataZedcloudEdgenodeDefaultNetInstIpToTerraform(struct?: DataZedcloudEdgenodeDefaultNetInstIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dns),
    domain: cdktf.stringToTerraform(struct!.domain),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    mask: cdktf.stringToTerraform(struct!.mask),
    ntp: cdktf.stringToTerraform(struct!.ntp),
    subnet: cdktf.stringToTerraform(struct!.subnet),
    dhcp_range: cdktf.listMapper(dataZedcloudEdgenodeDefaultNetInstIpDhcpRangeToTerraform, true)(struct!.dhcpRange),
  }
}


export function dataZedcloudEdgenodeDefaultNetInstIpToHclTerraform(struct?: DataZedcloudEdgenodeDefaultNetInstIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ntp: {
      value: cdktf.stringToHclTerraform(struct!.ntp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_range: {
      value: cdktf.listMapperHcl(dataZedcloudEdgenodeDefaultNetInstIpDhcpRangeToHclTerraform, true)(struct!.dhcpRange),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudEdgenodeDefaultNetInstIpDhcpRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudEdgenodeDefaultNetInstIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudEdgenodeDefaultNetInstIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ntp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntp = this._ntp;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    if (this._dhcpRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpRange = this._dhcpRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudEdgenodeDefaultNetInstIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dns = undefined;
      this._domain = undefined;
      this._gateway = undefined;
      this._mask = undefined;
      this._ntp = undefined;
      this._subnet = undefined;
      this._dhcpRange.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dns = value.dns;
      this._domain = value.domain;
      this._gateway = value.gateway;
      this._mask = value.mask;
      this._ntp = value.ntp;
      this._subnet = value.subnet;
      this._dhcpRange.internalValue = value.dhcpRange;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string[]; 
  public get dns() {
    return this.getListAttribute('dns');
  }
  public set dns(value: string[]) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // mask - computed: false, optional: true, required: false
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  public resetMask() {
    this._mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ntp - computed: false, optional: true, required: false
  private _ntp?: string; 
  public get ntp() {
    return this.getStringAttribute('ntp');
  }
  public set ntp(value: string) {
    this._ntp = value;
  }
  public resetNtp() {
    this._ntp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpInput() {
    return this._ntp;
  }

  // subnet - computed: true, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // dhcp_range - computed: false, optional: true, required: false
  private _dhcpRange = new DataZedcloudEdgenodeDefaultNetInstIpDhcpRangeList(this, "dhcp_range", false);
  public get dhcpRange() {
    return this._dhcpRange;
  }
  public putDhcpRange(value: DataZedcloudEdgenodeDefaultNetInstIpDhcpRange[] | cdktf.IResolvable) {
    this._dhcpRange.internalValue = value;
  }
  public resetDhcpRange() {
    this._dhcpRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRangeInput() {
    return this._dhcpRange.internalValue;
  }
}

export class DataZedcloudEdgenodeDefaultNetInstIpList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudEdgenodeDefaultNetInstIp[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudEdgenodeDefaultNetInstIpOutputReference {
    return new DataZedcloudEdgenodeDefaultNetInstIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudEdgenodeDefaultNetInstOpaqueLispSp {
  /**
  * Service credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#credential DataZedcloudEdgenode#credential}
  */
  readonly credential?: string;
  /**
  * Service name/ service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#name_or_ip DataZedcloudEdgenode#name_or_ip}
  */
  readonly nameOrIp?: string;
  /**
  * Service Point Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#type DataZedcloudEdgenode#type}
  */
  readonly type?: string;
}

export function dataZedcloudEdgenodeDefaultNetInstOpaqueLispSpToTerraform(struct?: DataZedcloudEdgenodeDefaultNetInstOpaqueLispSp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential: cdktf.stringToTerraform(struct!.credential),
    name_or_ip: cdktf.stringToTerraform(struct!.nameOrIp),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataZedcloudEdgenodeDefaultNetInstOpaqueLispSpToHclTerraform(struct?: DataZedcloudEdgenodeDefaultNetInstOpaqueLispSp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential: {
      value: cdktf.stringToHclTerraform(struct!.credential),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_or_ip: {
      value: cdktf.stringToHclTerraform(struct!.nameOrIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudEdgenodeDefaultNetInstOpaqueLispSpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudEdgenodeDefaultNetInstOpaqueLispSp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credential !== undefined) {
      hasAnyValues = true;
      internalValueResult.credential = this._credential;
    }
    if (this._nameOrIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameOrIp = this._nameOrIp;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudEdgenodeDefaultNetInstOpaqueLispSp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credential = undefined;
      this._nameOrIp = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credential = value.credential;
      this._nameOrIp = value.nameOrIp;
      this._type = value.type;
    }
  }

  // credential - computed: false, optional: true, required: false
  private _credential?: string; 
  public get credential() {
    return this.getStringAttribute('credential');
  }
  public set credential(value: string) {
    this._credential = value;
  }
  public resetCredential() {
    this._credential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialInput() {
    return this._credential;
  }

  // name_or_ip - computed: false, optional: true, required: false
  private _nameOrIp?: string; 
  public get nameOrIp() {
    return this.getStringAttribute('name_or_ip');
  }
  public set nameOrIp(value: string) {
    this._nameOrIp = value;
  }
  public resetNameOrIp() {
    this._nameOrIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameOrIpInput() {
    return this._nameOrIp;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataZedcloudEdgenodeDefaultNetInstOpaqueLispSpList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudEdgenodeDefaultNetInstOpaqueLispSp[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudEdgenodeDefaultNetInstOpaqueLispSpOutputReference {
    return new DataZedcloudEdgenodeDefaultNetInstOpaqueLispSpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudEdgenodeDefaultNetInstOpaqueLisp {
  /**
  * Allocate flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#allocate DataZedcloudEdgenode#allocate}
  */
  readonly allocate?: boolean | cdktf.IResolvable;
  /**
  * Allocation Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#allocationprefix DataZedcloudEdgenode#allocationprefix}
  */
  readonly allocationprefix?: string;
  /**
  * Allocation Prefix Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#allocationprefixlen DataZedcloudEdgenode#allocationprefixlen}
  */
  readonly allocationprefixlen?: number;
  /**
  * Export Private flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#exportprivate DataZedcloudEdgenode#exportprivate}
  */
  readonly exportprivate?: boolean | cdktf.IResolvable;
  /**
  * lisp id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#lispiid DataZedcloudEdgenode#lispiid}
  */
  readonly lispiid?: number;
  /**
  * sp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#sp DataZedcloudEdgenode#sp}
  */
  readonly sp?: DataZedcloudEdgenodeDefaultNetInstOpaqueLispSp[] | cdktf.IResolvable;
}

export function dataZedcloudEdgenodeDefaultNetInstOpaqueLispToTerraform(struct?: DataZedcloudEdgenodeDefaultNetInstOpaqueLisp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocate: cdktf.booleanToTerraform(struct!.allocate),
    allocationprefix: cdktf.stringToTerraform(struct!.allocationprefix),
    allocationprefixlen: cdktf.numberToTerraform(struct!.allocationprefixlen),
    exportprivate: cdktf.booleanToTerraform(struct!.exportprivate),
    lispiid: cdktf.numberToTerraform(struct!.lispiid),
    sp: cdktf.listMapper(dataZedcloudEdgenodeDefaultNetInstOpaqueLispSpToTerraform, true)(struct!.sp),
  }
}


export function dataZedcloudEdgenodeDefaultNetInstOpaqueLispToHclTerraform(struct?: DataZedcloudEdgenodeDefaultNetInstOpaqueLisp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocate: {
      value: cdktf.booleanToHclTerraform(struct!.allocate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allocationprefix: {
      value: cdktf.stringToHclTerraform(struct!.allocationprefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allocationprefixlen: {
      value: cdktf.numberToHclTerraform(struct!.allocationprefixlen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exportprivate: {
      value: cdktf.booleanToHclTerraform(struct!.exportprivate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lispiid: {
      value: cdktf.numberToHclTerraform(struct!.lispiid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sp: {
      value: cdktf.listMapperHcl(dataZedcloudEdgenodeDefaultNetInstOpaqueLispSpToHclTerraform, true)(struct!.sp),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudEdgenodeDefaultNetInstOpaqueLispSpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudEdgenodeDefaultNetInstOpaqueLispOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudEdgenodeDefaultNetInstOpaqueLisp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocate !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocate = this._allocate;
    }
    if (this._allocationprefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationprefix = this._allocationprefix;
    }
    if (this._allocationprefixlen !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationprefixlen = this._allocationprefixlen;
    }
    if (this._exportprivate !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportprivate = this._exportprivate;
    }
    if (this._lispiid !== undefined) {
      hasAnyValues = true;
      internalValueResult.lispiid = this._lispiid;
    }
    if (this._sp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sp = this._sp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudEdgenodeDefaultNetInstOpaqueLisp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocate = undefined;
      this._allocationprefix = undefined;
      this._allocationprefixlen = undefined;
      this._exportprivate = undefined;
      this._lispiid = undefined;
      this._sp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocate = value.allocate;
      this._allocationprefix = value.allocationprefix;
      this._allocationprefixlen = value.allocationprefixlen;
      this._exportprivate = value.exportprivate;
      this._lispiid = value.lispiid;
      this._sp.internalValue = value.sp;
    }
  }

  // allocate - computed: false, optional: true, required: false
  private _allocate?: boolean | cdktf.IResolvable; 
  public get allocate() {
    return this.getBooleanAttribute('allocate');
  }
  public set allocate(value: boolean | cdktf.IResolvable) {
    this._allocate = value;
  }
  public resetAllocate() {
    this._allocate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocateInput() {
    return this._allocate;
  }

  // allocationprefix - computed: false, optional: true, required: false
  private _allocationprefix?: string; 
  public get allocationprefix() {
    return this.getStringAttribute('allocationprefix');
  }
  public set allocationprefix(value: string) {
    this._allocationprefix = value;
  }
  public resetAllocationprefix() {
    this._allocationprefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationprefixInput() {
    return this._allocationprefix;
  }

  // allocationprefixlen - computed: false, optional: true, required: false
  private _allocationprefixlen?: number; 
  public get allocationprefixlen() {
    return this.getNumberAttribute('allocationprefixlen');
  }
  public set allocationprefixlen(value: number) {
    this._allocationprefixlen = value;
  }
  public resetAllocationprefixlen() {
    this._allocationprefixlen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationprefixlenInput() {
    return this._allocationprefixlen;
  }

  // exportprivate - computed: false, optional: true, required: false
  private _exportprivate?: boolean | cdktf.IResolvable; 
  public get exportprivate() {
    return this.getBooleanAttribute('exportprivate');
  }
  public set exportprivate(value: boolean | cdktf.IResolvable) {
    this._exportprivate = value;
  }
  public resetExportprivate() {
    this._exportprivate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportprivateInput() {
    return this._exportprivate;
  }

  // lispiid - computed: false, optional: true, required: false
  private _lispiid?: number; 
  public get lispiid() {
    return this.getNumberAttribute('lispiid');
  }
  public set lispiid(value: number) {
    this._lispiid = value;
  }
  public resetLispiid() {
    this._lispiid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lispiidInput() {
    return this._lispiid;
  }

  // sp - computed: false, optional: true, required: false
  private _sp = new DataZedcloudEdgenodeDefaultNetInstOpaqueLispSpList(this, "sp", false);
  public get sp() {
    return this._sp;
  }
  public putSp(value: DataZedcloudEdgenodeDefaultNetInstOpaqueLispSp[] | cdktf.IResolvable) {
    this._sp.internalValue = value;
  }
  public resetSp() {
    this._sp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spInput() {
    return this._sp.internalValue;
  }
}

export class DataZedcloudEdgenodeDefaultNetInstOpaqueLispList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudEdgenodeDefaultNetInstOpaqueLisp[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudEdgenodeDefaultNetInstOpaqueLispOutputReference {
    return new DataZedcloudEdgenodeDefaultNetInstOpaqueLispOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudEdgenodeDefaultNetInstOpaque {
  /**
  * base64 encoded string of opaque config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#oconfig DataZedcloudEdgenode#oconfig}
  */
  readonly oconfig?: string;
  /**
  * type of Opaque config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#type DataZedcloudEdgenode#type}
  */
  readonly type?: string;
  /**
  * lisp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#lisp DataZedcloudEdgenode#lisp}
  */
  readonly lisp?: DataZedcloudEdgenodeDefaultNetInstOpaqueLisp[] | cdktf.IResolvable;
}

export function dataZedcloudEdgenodeDefaultNetInstOpaqueToTerraform(struct?: DataZedcloudEdgenodeDefaultNetInstOpaque | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oconfig: cdktf.stringToTerraform(struct!.oconfig),
    type: cdktf.stringToTerraform(struct!.type),
    lisp: cdktf.listMapper(dataZedcloudEdgenodeDefaultNetInstOpaqueLispToTerraform, true)(struct!.lisp),
  }
}


export function dataZedcloudEdgenodeDefaultNetInstOpaqueToHclTerraform(struct?: DataZedcloudEdgenodeDefaultNetInstOpaque | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oconfig: {
      value: cdktf.stringToHclTerraform(struct!.oconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lisp: {
      value: cdktf.listMapperHcl(dataZedcloudEdgenodeDefaultNetInstOpaqueLispToHclTerraform, true)(struct!.lisp),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudEdgenodeDefaultNetInstOpaqueLispList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudEdgenodeDefaultNetInstOpaqueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudEdgenodeDefaultNetInstOpaque | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oconfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.oconfig = this._oconfig;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._lisp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lisp = this._lisp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudEdgenodeDefaultNetInstOpaque | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oconfig = undefined;
      this._type = undefined;
      this._lisp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oconfig = value.oconfig;
      this._type = value.type;
      this._lisp.internalValue = value.lisp;
    }
  }

  // oconfig - computed: false, optional: true, required: false
  private _oconfig?: string; 
  public get oconfig() {
    return this.getStringAttribute('oconfig');
  }
  public set oconfig(value: string) {
    this._oconfig = value;
  }
  public resetOconfig() {
    this._oconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oconfigInput() {
    return this._oconfig;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // lisp - computed: false, optional: true, required: false
  private _lisp = new DataZedcloudEdgenodeDefaultNetInstOpaqueLispList(this, "lisp", false);
  public get lisp() {
    return this._lisp;
  }
  public putLisp(value: DataZedcloudEdgenodeDefaultNetInstOpaqueLisp[] | cdktf.IResolvable) {
    this._lisp.internalValue = value;
  }
  public resetLisp() {
    this._lisp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lispInput() {
    return this._lisp.internalValue;
  }
}

export class DataZedcloudEdgenodeDefaultNetInstOpaqueList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudEdgenodeDefaultNetInstOpaque[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudEdgenodeDefaultNetInstOpaqueOutputReference {
    return new DataZedcloudEdgenodeDefaultNetInstOpaqueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudEdgenodeDefaultNetInstStaticRoutes {
  /**
  * Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#gateway DataZedcloudEdgenode#gateway}
  */
  readonly gateway?: string;
  /**
  * IP Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#prefix DataZedcloudEdgenode#prefix}
  */
  readonly prefix?: string;
}

export function dataZedcloudEdgenodeDefaultNetInstStaticRoutesToTerraform(struct?: DataZedcloudEdgenodeDefaultNetInstStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway: cdktf.stringToTerraform(struct!.gateway),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function dataZedcloudEdgenodeDefaultNetInstStaticRoutesToHclTerraform(struct?: DataZedcloudEdgenodeDefaultNetInstStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudEdgenodeDefaultNetInstStaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudEdgenodeDefaultNetInstStaticRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudEdgenodeDefaultNetInstStaticRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gateway = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gateway = value.gateway;
      this._prefix = value.prefix;
    }
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class DataZedcloudEdgenodeDefaultNetInstStaticRoutesList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudEdgenodeDefaultNetInstStaticRoutes[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudEdgenodeDefaultNetInstStaticRoutesOutputReference {
    return new DataZedcloudEdgenodeDefaultNetInstStaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudEdgenodeDefaultNetInst {
  /**
  * ID of the Cluster in which the network instance is configured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#cluster_id DataZedcloudEdgenode#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Detailed description of the network instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#description DataZedcloudEdgenode#description}
  */
  readonly description?: string;
  /**
  * Flag to indicate if this is the default network instance for the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#device_default DataZedcloudEdgenode#device_default}
  */
  readonly deviceDefault?: boolean | cdktf.IResolvable;
  /**
  * ID of the device on which network instance is created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#device_id DataZedcloudEdgenode#device_id}
  */
  readonly deviceId?: string;
  /**
  * Deprecated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#dhcp DataZedcloudEdgenode#dhcp}
  */
  readonly dhcp?: boolean | cdktf.IResolvable;
  /**
  * Kind of Network Instance:
  * NETWORK_INSTANCE_KIND_UNSPECIFIED
  * NETWORK_INSTANCE_KIND_TRANSPARENT
  * NETWORK_INSTANCE_KIND_SWITCH
  * NETWORK_INSTANCE_KIND_LOCAL
  * NETWORK_INSTANCE_KIND_CLOUD
  * NETWORK_INSTANCE_KIND_MESH
  * NETWORK_INSTANCE_KIND_HONEYPOT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#kind DataZedcloudEdgenode#kind}
  */
  readonly kind: string;
  /**
  * Maximum transmission unit (MTU) to set for the network instance and all application interfaces connected to it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#mtu DataZedcloudEdgenode#mtu}
  */
  readonly mtu?: number;
  /**
  * User defined name of the network instance, unique across the enterprise. Once object is created, name can’t be changed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#name DataZedcloudEdgenode#name}
  */
  readonly name: string;
  /**
  * id of the network policy to be attached to this network instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#network_policy_id DataZedcloudEdgenode#network_policy_id}
  */
  readonly networkPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#oconfig DataZedcloudEdgenode#oconfig}
  */
  readonly oconfig?: string;
  /**
  * name of port mapping in the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#port DataZedcloudEdgenode#port}
  */
  readonly port?: string;
  /**
  * Tags are name/value pairs that enable you to categorize resources. Tag names are case insensitive with max_length 512 and min_length 3. Tag values are case sensitive with max_length 256 and min_length 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#port_tags DataZedcloudEdgenode#port_tags}
  */
  readonly portTags?: { [key: string]: string };
  /**
  * id of the project in which network instance is created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#project_id DataZedcloudEdgenode#project_id}
  */
  readonly projectId?: string;
  /**
  * Automatically propagate connected routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#propagate_connected_routes DataZedcloudEdgenode#propagate_connected_routes}
  */
  readonly propagateConnectedRoutes?: boolean | cdktf.IResolvable;
  /**
  * Tags are name/value pairs that enable you to categorize resources. Tag names are case insensitive with max_length 512 and min_length 3. Tag values are case sensitive with max_length 256 and min_length 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#tags DataZedcloudEdgenode#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * User defined title of the network instance. Title can be changed at any time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#title DataZedcloudEdgenode#title}
  */
  readonly title: string;
  /**
  * Type of DHCP for this Network Instance:
  * NETWORK_INSTANCE_DHCP_TYPE_V4
  * NETWORK_INSTANCE_DHCP_TYPE_V6
  * NETWORK_INSTANCE_DHCP_TYPE_CRYPTOEID
  * NETWORK_INSTANCE_DHCP_TYPE_CRYPTOV4
  * NETWORK_INSTANCE_DHCP_TYPE_CRYPTOV6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#type DataZedcloudEdgenode#type}
  */
  readonly type?: string;
  /**
  * dns_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#dns_list DataZedcloudEdgenode#dns_list}
  */
  readonly dnsList?: DataZedcloudEdgenodeDefaultNetInstDnsListStruct[] | cdktf.IResolvable;
  /**
  * edge_node_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#edge_node_cluster DataZedcloudEdgenode#edge_node_cluster}
  */
  readonly edgeNodeCluster?: DataZedcloudEdgenodeDefaultNetInstEdgeNodeCluster[] | cdktf.IResolvable;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#ip DataZedcloudEdgenode#ip}
  */
  readonly ip?: DataZedcloudEdgenodeDefaultNetInstIp[] | cdktf.IResolvable;
  /**
  * opaque block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#opaque DataZedcloudEdgenode#opaque}
  */
  readonly opaque?: DataZedcloudEdgenodeDefaultNetInstOpaque[] | cdktf.IResolvable;
  /**
  * static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#static_routes DataZedcloudEdgenode#static_routes}
  */
  readonly staticRoutes?: DataZedcloudEdgenodeDefaultNetInstStaticRoutes[] | cdktf.IResolvable;
}

export function dataZedcloudEdgenodeDefaultNetInstToTerraform(struct?: DataZedcloudEdgenodeDefaultNetInst | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    description: cdktf.stringToTerraform(struct!.description),
    device_default: cdktf.booleanToTerraform(struct!.deviceDefault),
    device_id: cdktf.stringToTerraform(struct!.deviceId),
    dhcp: cdktf.booleanToTerraform(struct!.dhcp),
    kind: cdktf.stringToTerraform(struct!.kind),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    name: cdktf.stringToTerraform(struct!.name),
    network_policy_id: cdktf.stringToTerraform(struct!.networkPolicyId),
    oconfig: cdktf.stringToTerraform(struct!.oconfig),
    port: cdktf.stringToTerraform(struct!.port),
    port_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.portTags),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    propagate_connected_routes: cdktf.booleanToTerraform(struct!.propagateConnectedRoutes),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
    dns_list: cdktf.listMapper(dataZedcloudEdgenodeDefaultNetInstDnsListStructToTerraform, true)(struct!.dnsList),
    edge_node_cluster: cdktf.listMapper(dataZedcloudEdgenodeDefaultNetInstEdgeNodeClusterToTerraform, true)(struct!.edgeNodeCluster),
    ip: cdktf.listMapper(dataZedcloudEdgenodeDefaultNetInstIpToTerraform, true)(struct!.ip),
    opaque: cdktf.listMapper(dataZedcloudEdgenodeDefaultNetInstOpaqueToTerraform, true)(struct!.opaque),
    static_routes: cdktf.listMapper(dataZedcloudEdgenodeDefaultNetInstStaticRoutesToTerraform, true)(struct!.staticRoutes),
  }
}


export function dataZedcloudEdgenodeDefaultNetInstToHclTerraform(struct?: DataZedcloudEdgenodeDefaultNetInst | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_default: {
      value: cdktf.booleanToHclTerraform(struct!.deviceDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    device_id: {
      value: cdktf.stringToHclTerraform(struct!.deviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp: {
      value: cdktf.booleanToHclTerraform(struct!.dhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.networkPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oconfig: {
      value: cdktf.stringToHclTerraform(struct!.oconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.portTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    propagate_connected_routes: {
      value: cdktf.booleanToHclTerraform(struct!.propagateConnectedRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_list: {
      value: cdktf.listMapperHcl(dataZedcloudEdgenodeDefaultNetInstDnsListStructToHclTerraform, true)(struct!.dnsList),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudEdgenodeDefaultNetInstDnsListStructList",
    },
    edge_node_cluster: {
      value: cdktf.listMapperHcl(dataZedcloudEdgenodeDefaultNetInstEdgeNodeClusterToHclTerraform, true)(struct!.edgeNodeCluster),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudEdgenodeDefaultNetInstEdgeNodeClusterList",
    },
    ip: {
      value: cdktf.listMapperHcl(dataZedcloudEdgenodeDefaultNetInstIpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudEdgenodeDefaultNetInstIpList",
    },
    opaque: {
      value: cdktf.listMapperHcl(dataZedcloudEdgenodeDefaultNetInstOpaqueToHclTerraform, true)(struct!.opaque),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudEdgenodeDefaultNetInstOpaqueList",
    },
    static_routes: {
      value: cdktf.listMapperHcl(dataZedcloudEdgenodeDefaultNetInstStaticRoutesToHclTerraform, true)(struct!.staticRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudEdgenodeDefaultNetInstStaticRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudEdgenodeDefaultNetInstOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudEdgenodeDefaultNetInst | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._deviceDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceDefault = this._deviceDefault;
    }
    if (this._deviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceId = this._deviceId;
    }
    if (this._dhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicyId = this._networkPolicyId;
    }
    if (this._oconfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.oconfig = this._oconfig;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.portTags = this._portTags;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._propagateConnectedRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagateConnectedRoutes = this._propagateConnectedRoutes;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._dnsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsList = this._dnsList?.internalValue;
    }
    if (this._edgeNodeCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeNodeCluster = this._edgeNodeCluster?.internalValue;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    if (this._opaque?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opaque = this._opaque?.internalValue;
    }
    if (this._staticRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRoutes = this._staticRoutes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudEdgenodeDefaultNetInst | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterId = undefined;
      this._description = undefined;
      this._deviceDefault = undefined;
      this._deviceId = undefined;
      this._dhcp = undefined;
      this._kind = undefined;
      this._mtu = undefined;
      this._name = undefined;
      this._networkPolicyId = undefined;
      this._oconfig = undefined;
      this._port = undefined;
      this._portTags = undefined;
      this._projectId = undefined;
      this._propagateConnectedRoutes = undefined;
      this._tags = undefined;
      this._title = undefined;
      this._type = undefined;
      this._dnsList.internalValue = undefined;
      this._edgeNodeCluster.internalValue = undefined;
      this._ip.internalValue = undefined;
      this._opaque.internalValue = undefined;
      this._staticRoutes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterId = value.clusterId;
      this._description = value.description;
      this._deviceDefault = value.deviceDefault;
      this._deviceId = value.deviceId;
      this._dhcp = value.dhcp;
      this._kind = value.kind;
      this._mtu = value.mtu;
      this._name = value.name;
      this._networkPolicyId = value.networkPolicyId;
      this._oconfig = value.oconfig;
      this._port = value.port;
      this._portTags = value.portTags;
      this._projectId = value.projectId;
      this._propagateConnectedRoutes = value.propagateConnectedRoutes;
      this._tags = value.tags;
      this._title = value.title;
      this._type = value.type;
      this._dnsList.internalValue = value.dnsList;
      this._edgeNodeCluster.internalValue = value.edgeNodeCluster;
      this._ip.internalValue = value.ip;
      this._opaque.internalValue = value.opaque;
      this._staticRoutes.internalValue = value.staticRoutes;
    }
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_default - computed: false, optional: true, required: false
  private _deviceDefault?: boolean | cdktf.IResolvable; 
  public get deviceDefault() {
    return this.getBooleanAttribute('device_default');
  }
  public set deviceDefault(value: boolean | cdktf.IResolvable) {
    this._deviceDefault = value;
  }
  public resetDeviceDefault() {
    this._deviceDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceDefaultInput() {
    return this._deviceDefault;
  }

  // device_id - computed: false, optional: true, required: false
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // dhcp - computed: false, optional: true, required: false
  private _dhcp?: boolean | cdktf.IResolvable; 
  public get dhcp() {
    return this.getBooleanAttribute('dhcp');
  }
  public set dhcp(value: boolean | cdktf.IResolvable) {
    this._dhcp = value;
  }
  public resetDhcp() {
    this._dhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // lisp - computed: true, optional: false, required: false
  private _lisp = new DataZedcloudEdgenodeDefaultNetInstLispList(this, "lisp", false);
  public get lisp() {
    return this._lisp;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_policy_id - computed: false, optional: true, required: false
  private _networkPolicyId?: string; 
  public get networkPolicyId() {
    return this.getStringAttribute('network_policy_id');
  }
  public set networkPolicyId(value: string) {
    this._networkPolicyId = value;
  }
  public resetNetworkPolicyId() {
    this._networkPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyIdInput() {
    return this._networkPolicyId;
  }

  // oconfig - computed: false, optional: true, required: false
  private _oconfig?: string; 
  public get oconfig() {
    return this.getStringAttribute('oconfig');
  }
  public set oconfig(value: string) {
    this._oconfig = value;
  }
  public resetOconfig() {
    this._oconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oconfigInput() {
    return this._oconfig;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // port_tags - computed: false, optional: true, required: false
  private _portTags?: { [key: string]: string }; 
  public get portTags() {
    return this.getStringMapAttribute('port_tags');
  }
  public set portTags(value: { [key: string]: string }) {
    this._portTags = value;
  }
  public resetPortTags() {
    this._portTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portTagsInput() {
    return this._portTags;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // propagate_connected_routes - computed: false, optional: true, required: false
  private _propagateConnectedRoutes?: boolean | cdktf.IResolvable; 
  public get propagateConnectedRoutes() {
    return this.getBooleanAttribute('propagate_connected_routes');
  }
  public set propagateConnectedRoutes(value: boolean | cdktf.IResolvable) {
    this._propagateConnectedRoutes = value;
  }
  public resetPropagateConnectedRoutes() {
    this._propagateConnectedRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateConnectedRoutesInput() {
    return this._propagateConnectedRoutes;
  }

  // revision - computed: true, optional: false, required: false
  private _revision = new DataZedcloudEdgenodeDefaultNetInstRevisionList(this, "revision", false);
  public get revision() {
    return this._revision;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // dns_list - computed: false, optional: true, required: false
  private _dnsList = new DataZedcloudEdgenodeDefaultNetInstDnsListStructList(this, "dns_list", false);
  public get dnsList() {
    return this._dnsList;
  }
  public putDnsList(value: DataZedcloudEdgenodeDefaultNetInstDnsListStruct[] | cdktf.IResolvable) {
    this._dnsList.internalValue = value;
  }
  public resetDnsList() {
    this._dnsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsListInput() {
    return this._dnsList.internalValue;
  }

  // edge_node_cluster - computed: false, optional: true, required: false
  private _edgeNodeCluster = new DataZedcloudEdgenodeDefaultNetInstEdgeNodeClusterList(this, "edge_node_cluster", false);
  public get edgeNodeCluster() {
    return this._edgeNodeCluster;
  }
  public putEdgeNodeCluster(value: DataZedcloudEdgenodeDefaultNetInstEdgeNodeCluster[] | cdktf.IResolvable) {
    this._edgeNodeCluster.internalValue = value;
  }
  public resetEdgeNodeCluster() {
    this._edgeNodeCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeNodeClusterInput() {
    return this._edgeNodeCluster.internalValue;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new DataZedcloudEdgenodeDefaultNetInstIpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }
  public putIp(value: DataZedcloudEdgenodeDefaultNetInstIp[] | cdktf.IResolvable) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // opaque - computed: false, optional: true, required: false
  private _opaque = new DataZedcloudEdgenodeDefaultNetInstOpaqueList(this, "opaque", false);
  public get opaque() {
    return this._opaque;
  }
  public putOpaque(value: DataZedcloudEdgenodeDefaultNetInstOpaque[] | cdktf.IResolvable) {
    this._opaque.internalValue = value;
  }
  public resetOpaque() {
    this._opaque.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opaqueInput() {
    return this._opaque.internalValue;
  }

  // static_routes - computed: false, optional: true, required: false
  private _staticRoutes = new DataZedcloudEdgenodeDefaultNetInstStaticRoutesList(this, "static_routes", false);
  public get staticRoutes() {
    return this._staticRoutes;
  }
  public putStaticRoutes(value: DataZedcloudEdgenodeDefaultNetInstStaticRoutes[] | cdktf.IResolvable) {
    this._staticRoutes.internalValue = value;
  }
  public resetStaticRoutes() {
    this._staticRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesInput() {
    return this._staticRoutes.internalValue;
  }
}

export class DataZedcloudEdgenodeDefaultNetInstList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudEdgenodeDefaultNetInst[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudEdgenodeDefaultNetInstOutputReference {
    return new DataZedcloudEdgenodeDefaultNetInstOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudEdgenodeDevLocation {
  /**
  * City
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#city DataZedcloudEdgenode#city}
  */
  readonly city?: string;
  /**
  * Country code consisting of 2 capital letters as per ISO 3166-1 alpha2 standard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#country DataZedcloudEdgenode#country}
  */
  readonly country?: string;
  /**
  * Free formatted location string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#freeloc DataZedcloudEdgenode#freeloc}
  */
  readonly freeloc?: string;
  /**
  * Host name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#hostname DataZedcloudEdgenode#hostname}
  */
  readonly hostname?: string;
  /**
  * Deprecated field: comma, separated lat, long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#latlong DataZedcloudEdgenode#latlong}
  */
  readonly latlong?: string;
  /**
  * Ordered pair of (latitude, longitude) separated by comma (,). Latitude is the horizontal component used for geographic positioning; it is the angle between 0° (the equator) and ±90° (north or south) at the poles measured in decimal degrees. It is the first value in an ordered pair. A negative number denotes a location south of the equator; a positive number is north. Longitude is the vertical component used for geographic positioning; it is the angle between 0° (the Prime Meridian) and ±180° (westward or eastward) measured in decimal degrees. It is the second number in an ordered pair. A negative number indicates a location west of Greenwich, England; a positive number east.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#loc DataZedcloudEdgenode#loc}
  */
  readonly loc?: string;
  /**
  * The name of the recipient, firm, or company at this geographical location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#org DataZedcloudEdgenode#org}
  */
  readonly org?: string;
  /**
  * Postal code (ZIP code for USA) of the geographical location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#postal DataZedcloudEdgenode#postal}
  */
  readonly postal?: string;
  /**
  * Region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#region DataZedcloudEdgenode#region}
  */
  readonly region?: string;
  /**
  * Single IP address, either in IPv4 or in IPv6 format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#underlay_ip DataZedcloudEdgenode#underlay_ip}
  */
  readonly underlayIp?: string;
}

export function dataZedcloudEdgenodeDevLocationToTerraform(struct?: DataZedcloudEdgenodeDevLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    city: cdktf.stringToTerraform(struct!.city),
    country: cdktf.stringToTerraform(struct!.country),
    freeloc: cdktf.stringToTerraform(struct!.freeloc),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    latlong: cdktf.stringToTerraform(struct!.latlong),
    loc: cdktf.stringToTerraform(struct!.loc),
    org: cdktf.stringToTerraform(struct!.org),
    postal: cdktf.stringToTerraform(struct!.postal),
    region: cdktf.stringToTerraform(struct!.region),
    underlay_ip: cdktf.stringToTerraform(struct!.underlayIp),
  }
}


export function dataZedcloudEdgenodeDevLocationToHclTerraform(struct?: DataZedcloudEdgenodeDevLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    city: {
      value: cdktf.stringToHclTerraform(struct!.city),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    freeloc: {
      value: cdktf.stringToHclTerraform(struct!.freeloc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latlong: {
      value: cdktf.stringToHclTerraform(struct!.latlong),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loc: {
      value: cdktf.stringToHclTerraform(struct!.loc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    org: {
      value: cdktf.stringToHclTerraform(struct!.org),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postal: {
      value: cdktf.stringToHclTerraform(struct!.postal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    underlay_ip: {
      value: cdktf.stringToHclTerraform(struct!.underlayIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudEdgenodeDevLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudEdgenodeDevLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._freeloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeloc = this._freeloc;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._latlong !== undefined) {
      hasAnyValues = true;
      internalValueResult.latlong = this._latlong;
    }
    if (this._loc !== undefined) {
      hasAnyValues = true;
      internalValueResult.loc = this._loc;
    }
    if (this._org !== undefined) {
      hasAnyValues = true;
      internalValueResult.org = this._org;
    }
    if (this._postal !== undefined) {
      hasAnyValues = true;
      internalValueResult.postal = this._postal;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._underlayIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.underlayIp = this._underlayIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudEdgenodeDevLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._city = undefined;
      this._country = undefined;
      this._freeloc = undefined;
      this._hostname = undefined;
      this._latlong = undefined;
      this._loc = undefined;
      this._org = undefined;
      this._postal = undefined;
      this._region = undefined;
      this._underlayIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._city = value.city;
      this._country = value.country;
      this._freeloc = value.freeloc;
      this._hostname = value.hostname;
      this._latlong = value.latlong;
      this._loc = value.loc;
      this._org = value.org;
      this._postal = value.postal;
      this._region = value.region;
      this._underlayIp = value.underlayIp;
    }
  }

  // city - computed: false, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // freeloc - computed: false, optional: true, required: false
  private _freeloc?: string; 
  public get freeloc() {
    return this.getStringAttribute('freeloc');
  }
  public set freeloc(value: string) {
    this._freeloc = value;
  }
  public resetFreeloc() {
    this._freeloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freelocInput() {
    return this._freeloc;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // latlong - computed: false, optional: true, required: false
  private _latlong?: string; 
  public get latlong() {
    return this.getStringAttribute('latlong');
  }
  public set latlong(value: string) {
    this._latlong = value;
  }
  public resetLatlong() {
    this._latlong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latlongInput() {
    return this._latlong;
  }

  // loc - computed: false, optional: true, required: false
  private _loc?: string; 
  public get loc() {
    return this.getStringAttribute('loc');
  }
  public set loc(value: string) {
    this._loc = value;
  }
  public resetLoc() {
    this._loc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locInput() {
    return this._loc;
  }

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // postal - computed: false, optional: true, required: false
  private _postal?: string; 
  public get postal() {
    return this.getStringAttribute('postal');
  }
  public set postal(value: string) {
    this._postal = value;
  }
  public resetPostal() {
    this._postal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalInput() {
    return this._postal;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // underlay_ip - computed: false, optional: true, required: false
  private _underlayIp?: string; 
  public get underlayIp() {
    return this.getStringAttribute('underlay_ip');
  }
  public set underlayIp(value: string) {
    this._underlayIp = value;
  }
  public resetUnderlayIp() {
    this._underlayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get underlayIpInput() {
    return this._underlayIp;
  }
}

export class DataZedcloudEdgenodeDevLocationList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudEdgenodeDevLocation[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudEdgenodeDevLocationOutputReference {
    return new DataZedcloudEdgenodeDevLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudEdgenodeDlispLispMapServers {
  /**
  * lisp credential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#credential DataZedcloudEdgenode#credential}
  */
  readonly credential: string;
  /**
  * name/IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#name_or_ip DataZedcloudEdgenode#name_or_ip}
  */
  readonly nameOrIp: string;
}

export function dataZedcloudEdgenodeDlispLispMapServersToTerraform(struct?: DataZedcloudEdgenodeDlispLispMapServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential: cdktf.stringToTerraform(struct!.credential),
    name_or_ip: cdktf.stringToTerraform(struct!.nameOrIp),
  }
}


export function dataZedcloudEdgenodeDlispLispMapServersToHclTerraform(struct?: DataZedcloudEdgenodeDlispLispMapServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential: {
      value: cdktf.stringToHclTerraform(struct!.credential),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_or_ip: {
      value: cdktf.stringToHclTerraform(struct!.nameOrIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudEdgenodeDlispLispMapServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudEdgenodeDlispLispMapServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credential !== undefined) {
      hasAnyValues = true;
      internalValueResult.credential = this._credential;
    }
    if (this._nameOrIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameOrIp = this._nameOrIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudEdgenodeDlispLispMapServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credential = undefined;
      this._nameOrIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credential = value.credential;
      this._nameOrIp = value.nameOrIp;
    }
  }

  // credential - computed: false, optional: false, required: true
  private _credential?: string; 
  public get credential() {
    return this.getStringAttribute('credential');
  }
  public set credential(value: string) {
    this._credential = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialInput() {
    return this._credential;
  }

  // name_or_ip - computed: false, optional: false, required: true
  private _nameOrIp?: string; 
  public get nameOrIp() {
    return this.getStringAttribute('name_or_ip');
  }
  public set nameOrIp(value: string) {
    this._nameOrIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameOrIpInput() {
    return this._nameOrIp;
  }
}

export class DataZedcloudEdgenodeDlispLispMapServersList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudEdgenodeDlispLispMapServers[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudEdgenodeDlispLispMapServersOutputReference {
    return new DataZedcloudEdgenodeDlispLispMapServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudEdgenodeDlispZedServers {
  /**
  * EID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#e_id DataZedcloudEdgenode#e_id}
  */
  readonly eId: string[];
  /**
  * Hostname for dev zed server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#host_name DataZedcloudEdgenode#host_name}
  */
  readonly hostName: string;
}

export function dataZedcloudEdgenodeDlispZedServersToTerraform(struct?: DataZedcloudEdgenodeDlispZedServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    e_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.eId),
    host_name: cdktf.stringToTerraform(struct!.hostName),
  }
}


export function dataZedcloudEdgenodeDlispZedServersToHclTerraform(struct?: DataZedcloudEdgenodeDlispZedServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    e_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.eId),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudEdgenodeDlispZedServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudEdgenodeDlispZedServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eId !== undefined) {
      hasAnyValues = true;
      internalValueResult.eId = this._eId;
    }
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudEdgenodeDlispZedServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eId = undefined;
      this._hostName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eId = value.eId;
      this._hostName = value.hostName;
    }
  }

  // e_id - computed: false, optional: false, required: true
  private _eId?: string[]; 
  public get eId() {
    return this.getListAttribute('e_id');
  }
  public set eId(value: string[]) {
    this._eId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eIdInput() {
    return this._eId;
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }
}

export class DataZedcloudEdgenodeDlispZedServersList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudEdgenodeDlispZedServers[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudEdgenodeDlispZedServersOutputReference {
    return new DataZedcloudEdgenodeDlispZedServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudEdgenodeDlisp {
  /**
  * Client Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#client_addr DataZedcloudEdgenode#client_addr}
  */
  readonly clientAddr: string;
  /**
  * EID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#e_id DataZedcloudEdgenode#e_id}
  */
  readonly eId: string;
  /**
  * EID hash length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#e_id_hash_len DataZedcloudEdgenode#e_id_hash_len}
  */
  readonly eIdHashLen: number;
  /**
  * EID allocation prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#eid_allocation_prefix DataZedcloudEdgenode#eid_allocation_prefix}
  */
  readonly eidAllocationPrefix: string;
  /**
  * EID allocation prefix length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#eid_allocation_prefix_len DataZedcloudEdgenode#eid_allocation_prefix_len}
  */
  readonly eidAllocationPrefixLen: number;
  /**
  * LISP instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#lisp_instance DataZedcloudEdgenode#lisp_instance}
  */
  readonly lispInstance: number;
  /**
  * TEMP : flag to indicate which version of LISP data plane should be running on the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#mode DataZedcloudEdgenode#mode}
  */
  readonly mode: string;
  /**
  * lisp_map_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#lisp_map_servers DataZedcloudEdgenode#lisp_map_servers}
  */
  readonly lispMapServers: DataZedcloudEdgenodeDlispLispMapServers[] | cdktf.IResolvable;
  /**
  * zed_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#zed_servers DataZedcloudEdgenode#zed_servers}
  */
  readonly zedServers: DataZedcloudEdgenodeDlispZedServers[] | cdktf.IResolvable;
}

export function dataZedcloudEdgenodeDlispToTerraform(struct?: DataZedcloudEdgenodeDlisp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_addr: cdktf.stringToTerraform(struct!.clientAddr),
    e_id: cdktf.stringToTerraform(struct!.eId),
    e_id_hash_len: cdktf.numberToTerraform(struct!.eIdHashLen),
    eid_allocation_prefix: cdktf.stringToTerraform(struct!.eidAllocationPrefix),
    eid_allocation_prefix_len: cdktf.numberToTerraform(struct!.eidAllocationPrefixLen),
    lisp_instance: cdktf.numberToTerraform(struct!.lispInstance),
    mode: cdktf.stringToTerraform(struct!.mode),
    lisp_map_servers: cdktf.listMapper(dataZedcloudEdgenodeDlispLispMapServersToTerraform, true)(struct!.lispMapServers),
    zed_servers: cdktf.listMapper(dataZedcloudEdgenodeDlispZedServersToTerraform, true)(struct!.zedServers),
  }
}


export function dataZedcloudEdgenodeDlispToHclTerraform(struct?: DataZedcloudEdgenodeDlisp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_addr: {
      value: cdktf.stringToHclTerraform(struct!.clientAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    e_id: {
      value: cdktf.stringToHclTerraform(struct!.eId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    e_id_hash_len: {
      value: cdktf.numberToHclTerraform(struct!.eIdHashLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eid_allocation_prefix: {
      value: cdktf.stringToHclTerraform(struct!.eidAllocationPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eid_allocation_prefix_len: {
      value: cdktf.numberToHclTerraform(struct!.eidAllocationPrefixLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lisp_instance: {
      value: cdktf.numberToHclTerraform(struct!.lispInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lisp_map_servers: {
      value: cdktf.listMapperHcl(dataZedcloudEdgenodeDlispLispMapServersToHclTerraform, true)(struct!.lispMapServers),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudEdgenodeDlispLispMapServersList",
    },
    zed_servers: {
      value: cdktf.listMapperHcl(dataZedcloudEdgenodeDlispZedServersToHclTerraform, true)(struct!.zedServers),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudEdgenodeDlispZedServersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudEdgenodeDlispOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudEdgenodeDlisp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAddr = this._clientAddr;
    }
    if (this._eId !== undefined) {
      hasAnyValues = true;
      internalValueResult.eId = this._eId;
    }
    if (this._eIdHashLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.eIdHashLen = this._eIdHashLen;
    }
    if (this._eidAllocationPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.eidAllocationPrefix = this._eidAllocationPrefix;
    }
    if (this._eidAllocationPrefixLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.eidAllocationPrefixLen = this._eidAllocationPrefixLen;
    }
    if (this._lispInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.lispInstance = this._lispInstance;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._lispMapServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lispMapServers = this._lispMapServers?.internalValue;
    }
    if (this._zedServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zedServers = this._zedServers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudEdgenodeDlisp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientAddr = undefined;
      this._eId = undefined;
      this._eIdHashLen = undefined;
      this._eidAllocationPrefix = undefined;
      this._eidAllocationPrefixLen = undefined;
      this._lispInstance = undefined;
      this._mode = undefined;
      this._lispMapServers.internalValue = undefined;
      this._zedServers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientAddr = value.clientAddr;
      this._eId = value.eId;
      this._eIdHashLen = value.eIdHashLen;
      this._eidAllocationPrefix = value.eidAllocationPrefix;
      this._eidAllocationPrefixLen = value.eidAllocationPrefixLen;
      this._lispInstance = value.lispInstance;
      this._mode = value.mode;
      this._lispMapServers.internalValue = value.lispMapServers;
      this._zedServers.internalValue = value.zedServers;
    }
  }

  // client_addr - computed: false, optional: false, required: true
  private _clientAddr?: string; 
  public get clientAddr() {
    return this.getStringAttribute('client_addr');
  }
  public set clientAddr(value: string) {
    this._clientAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAddrInput() {
    return this._clientAddr;
  }

  // e_id - computed: false, optional: false, required: true
  private _eId?: string; 
  public get eId() {
    return this.getStringAttribute('e_id');
  }
  public set eId(value: string) {
    this._eId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eIdInput() {
    return this._eId;
  }

  // e_id_hash_len - computed: false, optional: false, required: true
  private _eIdHashLen?: number; 
  public get eIdHashLen() {
    return this.getNumberAttribute('e_id_hash_len');
  }
  public set eIdHashLen(value: number) {
    this._eIdHashLen = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eIdHashLenInput() {
    return this._eIdHashLen;
  }

  // eid_allocation_prefix - computed: false, optional: false, required: true
  private _eidAllocationPrefix?: string; 
  public get eidAllocationPrefix() {
    return this.getStringAttribute('eid_allocation_prefix');
  }
  public set eidAllocationPrefix(value: string) {
    this._eidAllocationPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eidAllocationPrefixInput() {
    return this._eidAllocationPrefix;
  }

  // eid_allocation_prefix_len - computed: false, optional: false, required: true
  private _eidAllocationPrefixLen?: number; 
  public get eidAllocationPrefixLen() {
    return this.getNumberAttribute('eid_allocation_prefix_len');
  }
  public set eidAllocationPrefixLen(value: number) {
    this._eidAllocationPrefixLen = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eidAllocationPrefixLenInput() {
    return this._eidAllocationPrefixLen;
  }

  // lisp_instance - computed: false, optional: false, required: true
  private _lispInstance?: number; 
  public get lispInstance() {
    return this.getNumberAttribute('lisp_instance');
  }
  public set lispInstance(value: number) {
    this._lispInstance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lispInstanceInput() {
    return this._lispInstance;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // lisp_map_servers - computed: false, optional: false, required: true
  private _lispMapServers = new DataZedcloudEdgenodeDlispLispMapServersList(this, "lisp_map_servers", false);
  public get lispMapServers() {
    return this._lispMapServers;
  }
  public putLispMapServers(value: DataZedcloudEdgenodeDlispLispMapServers[] | cdktf.IResolvable) {
    this._lispMapServers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lispMapServersInput() {
    return this._lispMapServers.internalValue;
  }

  // zed_servers - computed: false, optional: false, required: true
  private _zedServers = new DataZedcloudEdgenodeDlispZedServersList(this, "zed_servers", false);
  public get zedServers() {
    return this._zedServers;
  }
  public putZedServers(value: DataZedcloudEdgenodeDlispZedServers[] | cdktf.IResolvable) {
    this._zedServers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zedServersInput() {
    return this._zedServers.internalValue;
  }
}

export class DataZedcloudEdgenodeDlispList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudEdgenodeDlisp[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudEdgenodeDlispOutputReference {
    return new DataZedcloudEdgenodeDlispOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudEdgenodeEdgeviewconfigAppPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#allow_app DataZedcloudEdgenode#allow_app}
  */
  readonly allowApp?: boolean | cdktf.IResolvable;
}

export function dataZedcloudEdgenodeEdgeviewconfigAppPolicyToTerraform(struct?: DataZedcloudEdgenodeEdgeviewconfigAppPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_app: cdktf.booleanToTerraform(struct!.allowApp),
  }
}


export function dataZedcloudEdgenodeEdgeviewconfigAppPolicyToHclTerraform(struct?: DataZedcloudEdgenodeEdgeviewconfigAppPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_app: {
      value: cdktf.booleanToHclTerraform(struct!.allowApp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudEdgenodeEdgeviewconfigAppPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudEdgenodeEdgeviewconfigAppPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowApp !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowApp = this._allowApp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudEdgenodeEdgeviewconfigAppPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowApp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowApp = value.allowApp;
    }
  }

  // allow_app - computed: false, optional: true, required: false
  private _allowApp?: boolean | cdktf.IResolvable; 
  public get allowApp() {
    return this.getBooleanAttribute('allow_app');
  }
  public set allowApp(value: boolean | cdktf.IResolvable) {
    this._allowApp = value;
  }
  public resetAllowApp() {
    this._allowApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAppInput() {
    return this._allowApp;
  }
}

export class DataZedcloudEdgenodeEdgeviewconfigAppPolicyList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudEdgenodeEdgeviewconfigAppPolicy[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudEdgenodeEdgeviewconfigAppPolicyOutputReference {
    return new DataZedcloudEdgenodeEdgeviewconfigAppPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudEdgenodeEdgeviewconfigDevPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#allow_dev DataZedcloudEdgenode#allow_dev}
  */
  readonly allowDev?: boolean | cdktf.IResolvable;
}

export function dataZedcloudEdgenodeEdgeviewconfigDevPolicyToTerraform(struct?: DataZedcloudEdgenodeEdgeviewconfigDevPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_dev: cdktf.booleanToTerraform(struct!.allowDev),
  }
}


export function dataZedcloudEdgenodeEdgeviewconfigDevPolicyToHclTerraform(struct?: DataZedcloudEdgenodeEdgeviewconfigDevPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_dev: {
      value: cdktf.booleanToHclTerraform(struct!.allowDev),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudEdgenodeEdgeviewconfigDevPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudEdgenodeEdgeviewconfigDevPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowDev !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowDev = this._allowDev;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudEdgenodeEdgeviewconfigDevPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowDev = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowDev = value.allowDev;
    }
  }

  // allow_dev - computed: false, optional: true, required: false
  private _allowDev?: boolean | cdktf.IResolvable; 
  public get allowDev() {
    return this.getBooleanAttribute('allow_dev');
  }
  public set allowDev(value: boolean | cdktf.IResolvable) {
    this._allowDev = value;
  }
  public resetAllowDev() {
    this._allowDev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDevInput() {
    return this._allowDev;
  }
}

export class DataZedcloudEdgenodeEdgeviewconfigDevPolicyList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudEdgenodeEdgeviewconfigDevPolicy[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudEdgenodeEdgeviewconfigDevPolicyOutputReference {
    return new DataZedcloudEdgenodeEdgeviewconfigDevPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudEdgenodeEdgeviewconfigExtPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#allow_ext DataZedcloudEdgenode#allow_ext}
  */
  readonly allowExt?: boolean | cdktf.IResolvable;
}

export function dataZedcloudEdgenodeEdgeviewconfigExtPolicyToTerraform(struct?: DataZedcloudEdgenodeEdgeviewconfigExtPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_ext: cdktf.booleanToTerraform(struct!.allowExt),
  }
}


export function dataZedcloudEdgenodeEdgeviewconfigExtPolicyToHclTerraform(struct?: DataZedcloudEdgenodeEdgeviewconfigExtPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_ext: {
      value: cdktf.booleanToHclTerraform(struct!.allowExt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudEdgenodeEdgeviewconfigExtPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudEdgenodeEdgeviewconfigExtPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowExt !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowExt = this._allowExt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudEdgenodeEdgeviewconfigExtPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowExt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowExt = value.allowExt;
    }
  }

  // allow_ext - computed: false, optional: true, required: false
  private _allowExt?: boolean | cdktf.IResolvable; 
  public get allowExt() {
    return this.getBooleanAttribute('allow_ext');
  }
  public set allowExt(value: boolean | cdktf.IResolvable) {
    this._allowExt = value;
  }
  public resetAllowExt() {
    this._allowExt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowExtInput() {
    return this._allowExt;
  }
}

export class DataZedcloudEdgenodeEdgeviewconfigExtPolicyList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudEdgenodeEdgeviewconfigExtPolicy[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudEdgenodeEdgeviewconfigExtPolicyOutputReference {
    return new DataZedcloudEdgenodeEdgeviewconfigExtPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudEdgenodeEdgeviewconfigJwtInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#allow_sec DataZedcloudEdgenode#allow_sec}
  */
  readonly allowSec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#disp_url DataZedcloudEdgenode#disp_url}
  */
  readonly dispUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#encrypt DataZedcloudEdgenode#encrypt}
  */
  readonly encrypt?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#expire_sec DataZedcloudEdgenode#expire_sec}
  */
  readonly expireSec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#num_inst DataZedcloudEdgenode#num_inst}
  */
  readonly numInst?: number;
}

export function dataZedcloudEdgenodeEdgeviewconfigJwtInfoToTerraform(struct?: DataZedcloudEdgenodeEdgeviewconfigJwtInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_sec: cdktf.numberToTerraform(struct!.allowSec),
    disp_url: cdktf.stringToTerraform(struct!.dispUrl),
    encrypt: cdktf.booleanToTerraform(struct!.encrypt),
    expire_sec: cdktf.stringToTerraform(struct!.expireSec),
    num_inst: cdktf.numberToTerraform(struct!.numInst),
  }
}


export function dataZedcloudEdgenodeEdgeviewconfigJwtInfoToHclTerraform(struct?: DataZedcloudEdgenodeEdgeviewconfigJwtInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_sec: {
      value: cdktf.numberToHclTerraform(struct!.allowSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disp_url: {
      value: cdktf.stringToHclTerraform(struct!.dispUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypt: {
      value: cdktf.booleanToHclTerraform(struct!.encrypt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expire_sec: {
      value: cdktf.stringToHclTerraform(struct!.expireSec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_inst: {
      value: cdktf.numberToHclTerraform(struct!.numInst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudEdgenodeEdgeviewconfigJwtInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudEdgenodeEdgeviewconfigJwtInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSec = this._allowSec;
    }
    if (this._dispUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.dispUrl = this._dispUrl;
    }
    if (this._encrypt !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypt = this._encrypt;
    }
    if (this._expireSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.expireSec = this._expireSec;
    }
    if (this._numInst !== undefined) {
      hasAnyValues = true;
      internalValueResult.numInst = this._numInst;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudEdgenodeEdgeviewconfigJwtInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowSec = undefined;
      this._dispUrl = undefined;
      this._encrypt = undefined;
      this._expireSec = undefined;
      this._numInst = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowSec = value.allowSec;
      this._dispUrl = value.dispUrl;
      this._encrypt = value.encrypt;
      this._expireSec = value.expireSec;
      this._numInst = value.numInst;
    }
  }

  // allow_sec - computed: false, optional: true, required: false
  private _allowSec?: number; 
  public get allowSec() {
    return this.getNumberAttribute('allow_sec');
  }
  public set allowSec(value: number) {
    this._allowSec = value;
  }
  public resetAllowSec() {
    this._allowSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSecInput() {
    return this._allowSec;
  }

  // disp_url - computed: false, optional: true, required: false
  private _dispUrl?: string; 
  public get dispUrl() {
    return this.getStringAttribute('disp_url');
  }
  public set dispUrl(value: string) {
    this._dispUrl = value;
  }
  public resetDispUrl() {
    this._dispUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dispUrlInput() {
    return this._dispUrl;
  }

  // encrypt - computed: false, optional: true, required: false
  private _encrypt?: boolean | cdktf.IResolvable; 
  public get encrypt() {
    return this.getBooleanAttribute('encrypt');
  }
  public set encrypt(value: boolean | cdktf.IResolvable) {
    this._encrypt = value;
  }
  public resetEncrypt() {
    this._encrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptInput() {
    return this._encrypt;
  }

  // expire_sec - computed: true, optional: true, required: false
  private _expireSec?: string; 
  public get expireSec() {
    return this.getStringAttribute('expire_sec');
  }
  public set expireSec(value: string) {
    this._expireSec = value;
  }
  public resetExpireSec() {
    this._expireSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireSecInput() {
    return this._expireSec;
  }

  // num_inst - computed: false, optional: true, required: false
  private _numInst?: number; 
  public get numInst() {
    return this.getNumberAttribute('num_inst');
  }
  public set numInst(value: number) {
    this._numInst = value;
  }
  public resetNumInst() {
    this._numInst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numInstInput() {
    return this._numInst;
  }
}

export class DataZedcloudEdgenodeEdgeviewconfigJwtInfoList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudEdgenodeEdgeviewconfigJwtInfo[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudEdgenodeEdgeviewconfigJwtInfoOutputReference {
    return new DataZedcloudEdgenodeEdgeviewconfigJwtInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudEdgenodeEdgeviewconfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#generation_id DataZedcloudEdgenode#generation_id}
  */
  readonly generationId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#token DataZedcloudEdgenode#token}
  */
  readonly token?: string;
  /**
  * app_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#app_policy DataZedcloudEdgenode#app_policy}
  */
  readonly appPolicy?: DataZedcloudEdgenodeEdgeviewconfigAppPolicy[] | cdktf.IResolvable;
  /**
  * dev_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#dev_policy DataZedcloudEdgenode#dev_policy}
  */
  readonly devPolicy?: DataZedcloudEdgenodeEdgeviewconfigDevPolicy[] | cdktf.IResolvable;
  /**
  * ext_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#ext_policy DataZedcloudEdgenode#ext_policy}
  */
  readonly extPolicy?: DataZedcloudEdgenodeEdgeviewconfigExtPolicy[] | cdktf.IResolvable;
  /**
  * jwt_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#jwt_info DataZedcloudEdgenode#jwt_info}
  */
  readonly jwtInfo?: DataZedcloudEdgenodeEdgeviewconfigJwtInfo[] | cdktf.IResolvable;
}

export function dataZedcloudEdgenodeEdgeviewconfigToTerraform(struct?: DataZedcloudEdgenodeEdgeviewconfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generation_id: cdktf.numberToTerraform(struct!.generationId),
    token: cdktf.stringToTerraform(struct!.token),
    app_policy: cdktf.listMapper(dataZedcloudEdgenodeEdgeviewconfigAppPolicyToTerraform, true)(struct!.appPolicy),
    dev_policy: cdktf.listMapper(dataZedcloudEdgenodeEdgeviewconfigDevPolicyToTerraform, true)(struct!.devPolicy),
    ext_policy: cdktf.listMapper(dataZedcloudEdgenodeEdgeviewconfigExtPolicyToTerraform, true)(struct!.extPolicy),
    jwt_info: cdktf.listMapper(dataZedcloudEdgenodeEdgeviewconfigJwtInfoToTerraform, true)(struct!.jwtInfo),
  }
}


export function dataZedcloudEdgenodeEdgeviewconfigToHclTerraform(struct?: DataZedcloudEdgenodeEdgeviewconfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generation_id: {
      value: cdktf.numberToHclTerraform(struct!.generationId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_policy: {
      value: cdktf.listMapperHcl(dataZedcloudEdgenodeEdgeviewconfigAppPolicyToHclTerraform, true)(struct!.appPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudEdgenodeEdgeviewconfigAppPolicyList",
    },
    dev_policy: {
      value: cdktf.listMapperHcl(dataZedcloudEdgenodeEdgeviewconfigDevPolicyToHclTerraform, true)(struct!.devPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudEdgenodeEdgeviewconfigDevPolicyList",
    },
    ext_policy: {
      value: cdktf.listMapperHcl(dataZedcloudEdgenodeEdgeviewconfigExtPolicyToHclTerraform, true)(struct!.extPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudEdgenodeEdgeviewconfigExtPolicyList",
    },
    jwt_info: {
      value: cdktf.listMapperHcl(dataZedcloudEdgenodeEdgeviewconfigJwtInfoToHclTerraform, true)(struct!.jwtInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudEdgenodeEdgeviewconfigJwtInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudEdgenodeEdgeviewconfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudEdgenodeEdgeviewconfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.generationId = this._generationId;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._appPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appPolicy = this._appPolicy?.internalValue;
    }
    if (this._devPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devPolicy = this._devPolicy?.internalValue;
    }
    if (this._extPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extPolicy = this._extPolicy?.internalValue;
    }
    if (this._jwtInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtInfo = this._jwtInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudEdgenodeEdgeviewconfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._generationId = undefined;
      this._token = undefined;
      this._appPolicy.internalValue = undefined;
      this._devPolicy.internalValue = undefined;
      this._extPolicy.internalValue = undefined;
      this._jwtInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._generationId = value.generationId;
      this._token = value.token;
      this._appPolicy.internalValue = value.appPolicy;
      this._devPolicy.internalValue = value.devPolicy;
      this._extPolicy.internalValue = value.extPolicy;
      this._jwtInfo.internalValue = value.jwtInfo;
    }
  }

  // generation_id - computed: false, optional: true, required: false
  private _generationId?: number; 
  public get generationId() {
    return this.getNumberAttribute('generation_id');
  }
  public set generationId(value: number) {
    this._generationId = value;
  }
  public resetGenerationId() {
    this._generationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationIdInput() {
    return this._generationId;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // app_policy - computed: false, optional: true, required: false
  private _appPolicy = new DataZedcloudEdgenodeEdgeviewconfigAppPolicyList(this, "app_policy", false);
  public get appPolicy() {
    return this._appPolicy;
  }
  public putAppPolicy(value: DataZedcloudEdgenodeEdgeviewconfigAppPolicy[] | cdktf.IResolvable) {
    this._appPolicy.internalValue = value;
  }
  public resetAppPolicy() {
    this._appPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appPolicyInput() {
    return this._appPolicy.internalValue;
  }

  // dev_policy - computed: false, optional: true, required: false
  private _devPolicy = new DataZedcloudEdgenodeEdgeviewconfigDevPolicyList(this, "dev_policy", false);
  public get devPolicy() {
    return this._devPolicy;
  }
  public putDevPolicy(value: DataZedcloudEdgenodeEdgeviewconfigDevPolicy[] | cdktf.IResolvable) {
    this._devPolicy.internalValue = value;
  }
  public resetDevPolicy() {
    this._devPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devPolicyInput() {
    return this._devPolicy.internalValue;
  }

  // ext_policy - computed: false, optional: true, required: false
  private _extPolicy = new DataZedcloudEdgenodeEdgeviewconfigExtPolicyList(this, "ext_policy", false);
  public get extPolicy() {
    return this._extPolicy;
  }
  public putExtPolicy(value: DataZedcloudEdgenodeEdgeviewconfigExtPolicy[] | cdktf.IResolvable) {
    this._extPolicy.internalValue = value;
  }
  public resetExtPolicy() {
    this._extPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extPolicyInput() {
    return this._extPolicy.internalValue;
  }

  // jwt_info - computed: false, optional: true, required: false
  private _jwtInfo = new DataZedcloudEdgenodeEdgeviewconfigJwtInfoList(this, "jwt_info", false);
  public get jwtInfo() {
    return this._jwtInfo;
  }
  public putJwtInfo(value: DataZedcloudEdgenodeEdgeviewconfigJwtInfo[] | cdktf.IResolvable) {
    this._jwtInfo.internalValue = value;
  }
  public resetJwtInfo() {
    this._jwtInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtInfoInput() {
    return this._jwtInfo.internalValue;
  }
}

export class DataZedcloudEdgenodeEdgeviewconfigList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudEdgenodeEdgeviewconfig[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudEdgenodeEdgeviewconfigOutputReference {
    return new DataZedcloudEdgenodeEdgeviewconfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudEdgenodeInterfaces {
  /**
  * cost of using this interface. Default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#cost DataZedcloudEdgenode#cost}
  */
  readonly cost?: number;
  /**
  * Adapter Udage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#intf_usage DataZedcloudEdgenode#intf_usage}
  */
  readonly intfUsage?: string;
  /**
  * name of interface in the manifest to which this network or adapter maps to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#intfname DataZedcloudEdgenode#intfname}
  */
  readonly intfname?: string;
  /**
  * IP address: we will be needing this in cae of static network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#ipaddr DataZedcloudEdgenode#ipaddr}
  */
  readonly ipaddr?: string;
  /**
  * mac address needs to be over-written in some cases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#macaddr DataZedcloudEdgenode#macaddr}
  */
  readonly macaddr?: string;
  /**
  * network name: if attaching a network use netname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#netname DataZedcloudEdgenode#netname}
  */
  readonly netname?: string;
  /**
  * Tags are name/value pairs that enable you to categorize resources. Tag names are case insensitive with max_length 512 and min_length 3. Tag values are case sensitive with max_length 256 and min_length 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#tags DataZedcloudEdgenode#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataZedcloudEdgenodeInterfacesToTerraform(struct?: DataZedcloudEdgenodeInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cost: cdktf.numberToTerraform(struct!.cost),
    intf_usage: cdktf.stringToTerraform(struct!.intfUsage),
    intfname: cdktf.stringToTerraform(struct!.intfname),
    ipaddr: cdktf.stringToTerraform(struct!.ipaddr),
    macaddr: cdktf.stringToTerraform(struct!.macaddr),
    netname: cdktf.stringToTerraform(struct!.netname),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataZedcloudEdgenodeInterfacesToHclTerraform(struct?: DataZedcloudEdgenodeInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cost: {
      value: cdktf.numberToHclTerraform(struct!.cost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    intf_usage: {
      value: cdktf.stringToHclTerraform(struct!.intfUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    intfname: {
      value: cdktf.stringToHclTerraform(struct!.intfname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipaddr: {
      value: cdktf.stringToHclTerraform(struct!.ipaddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    macaddr: {
      value: cdktf.stringToHclTerraform(struct!.macaddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netname: {
      value: cdktf.stringToHclTerraform(struct!.netname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudEdgenodeInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudEdgenodeInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._intfUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.intfUsage = this._intfUsage;
    }
    if (this._intfname !== undefined) {
      hasAnyValues = true;
      internalValueResult.intfname = this._intfname;
    }
    if (this._ipaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipaddr = this._ipaddr;
    }
    if (this._macaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.macaddr = this._macaddr;
    }
    if (this._netname !== undefined) {
      hasAnyValues = true;
      internalValueResult.netname = this._netname;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudEdgenodeInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cost = undefined;
      this._intfUsage = undefined;
      this._intfname = undefined;
      this._ipaddr = undefined;
      this._macaddr = undefined;
      this._netname = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cost = value.cost;
      this._intfUsage = value.intfUsage;
      this._intfname = value.intfname;
      this._ipaddr = value.ipaddr;
      this._macaddr = value.macaddr;
      this._netname = value.netname;
      this._tags = value.tags;
    }
  }

  // cost - computed: false, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // intf_usage - computed: false, optional: true, required: false
  private _intfUsage?: string; 
  public get intfUsage() {
    return this.getStringAttribute('intf_usage');
  }
  public set intfUsage(value: string) {
    this._intfUsage = value;
  }
  public resetIntfUsage() {
    this._intfUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intfUsageInput() {
    return this._intfUsage;
  }

  // intfname - computed: false, optional: true, required: false
  private _intfname?: string; 
  public get intfname() {
    return this.getStringAttribute('intfname');
  }
  public set intfname(value: string) {
    this._intfname = value;
  }
  public resetIntfname() {
    this._intfname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intfnameInput() {
    return this._intfname;
  }

  // ipaddr - computed: false, optional: true, required: false
  private _ipaddr?: string; 
  public get ipaddr() {
    return this.getStringAttribute('ipaddr');
  }
  public set ipaddr(value: string) {
    this._ipaddr = value;
  }
  public resetIpaddr() {
    this._ipaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddrInput() {
    return this._ipaddr;
  }

  // macaddr - computed: false, optional: true, required: false
  private _macaddr?: string; 
  public get macaddr() {
    return this.getStringAttribute('macaddr');
  }
  public set macaddr(value: string) {
    this._macaddr = value;
  }
  public resetMacaddr() {
    this._macaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macaddrInput() {
    return this._macaddr;
  }

  // netname - computed: false, optional: true, required: false
  private _netname?: string; 
  public get netname() {
    return this.getStringAttribute('netname');
  }
  public set netname(value: string) {
    this._netname = value;
  }
  public resetNetname() {
    this._netname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netnameInput() {
    return this._netname;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

export class DataZedcloudEdgenodeInterfacesList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudEdgenodeInterfaces[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudEdgenodeInterfacesOutputReference {
    return new DataZedcloudEdgenodeInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudEdgenodeRevision {
}

export function dataZedcloudEdgenodeRevisionToTerraform(struct?: DataZedcloudEdgenodeRevision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudEdgenodeRevisionToHclTerraform(struct?: DataZedcloudEdgenodeRevision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudEdgenodeRevisionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudEdgenodeRevision | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudEdgenodeRevision | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // curr - computed: true, optional: false, required: false
  public get curr() {
    return this.getStringAttribute('curr');
  }

  // prev - computed: true, optional: false, required: false
  public get prev() {
    return this.getStringAttribute('prev');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
}

export class DataZedcloudEdgenodeRevisionList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudEdgenodeRevision[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudEdgenodeRevisionOutputReference {
    return new DataZedcloudEdgenodeRevisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode zedcloud_edgenode}
*/
export class DataZedcloudEdgenode extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zedcloud_edgenode";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZedcloudEdgenode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZedcloudEdgenode to import
  * @param importFromId The id of the existing DataZedcloudEdgenode that should be imported. Refer to the {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZedcloudEdgenode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zedcloud_edgenode", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/edgenode zedcloud_edgenode} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZedcloudEdgenodeConfig
  */
  public constructor(scope: Construct, id: string, config: DataZedcloudEdgenodeConfig) {
    super(scope, id, {
      terraformResourceType: 'zedcloud_edgenode',
      terraformGeneratorMetadata: {
        providerName: 'zedcloud',
        providerVersion: '2.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminState = config.adminState;
    this._assetId = config.assetId;
    this._baseOsRetryCounter = config.baseOsRetryCounter;
    this._baseOsRetryTime = config.baseOsRetryTime;
    this._clientIp = config.clientIp;
    this._clusterId = config.clusterId;
    this._cpu = config.cpu;
    this._deploymentTag = config.deploymentTag;
    this._deprecated = config.deprecated;
    this._description = config.description;
    this._generateSoftSerial = config.generateSoftSerial;
    this._identity = config.identity;
    this._location = config.location;
    this._memory = config.memory;
    this._modelId = config.modelId;
    this._name = config.name;
    this._onboardingKey = config.onboardingKey;
    this._preparePowerOffCounter = config.preparePowerOffCounter;
    this._preparePowerOffTime = config.preparePowerOffTime;
    this._projectId = config.projectId;
    this._resetCounter = config.resetCounter;
    this._resetTime = config.resetTime;
    this._serialno = config.serialno;
    this._sitePictures = config.sitePictures;
    this._storage = config.storage;
    this._tags = config.tags;
    this._thread = config.thread;
    this._title = config.title;
    this._token = config.token;
    this._utype = config.utype;
    this._baseImage.internalValue = config.baseImage;
    this._configItem.internalValue = config.configItem;
    this._defaultNetInst.internalValue = config.defaultNetInst;
    this._devLocation.internalValue = config.devLocation;
    this._dlisp.internalValue = config.dlisp;
    this._edgeviewconfig.internalValue = config.edgeviewconfig;
    this._interfaces.internalValue = config.interfaces;
    this._revision.internalValue = config.revision;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state - computed: false, optional: true, required: false
  private _adminState?: string; 
  public get adminState() {
    return this.getStringAttribute('admin_state');
  }
  public set adminState(value: string) {
    this._adminState = value;
  }
  public resetAdminState() {
    this._adminState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateInput() {
    return this._adminState;
  }

  // asset_id - computed: false, optional: true, required: false
  private _assetId?: string; 
  public get assetId() {
    return this.getStringAttribute('asset_id');
  }
  public set assetId(value: string) {
    this._assetId = value;
  }
  public resetAssetId() {
    this._assetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetIdInput() {
    return this._assetId;
  }

  // base_os_retry_counter - computed: false, optional: true, required: false
  private _baseOsRetryCounter?: number; 
  public get baseOsRetryCounter() {
    return this.getNumberAttribute('base_os_retry_counter');
  }
  public set baseOsRetryCounter(value: number) {
    this._baseOsRetryCounter = value;
  }
  public resetBaseOsRetryCounter() {
    this._baseOsRetryCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseOsRetryCounterInput() {
    return this._baseOsRetryCounter;
  }

  // base_os_retry_time - computed: false, optional: true, required: false
  private _baseOsRetryTime?: string; 
  public get baseOsRetryTime() {
    return this.getStringAttribute('base_os_retry_time');
  }
  public set baseOsRetryTime(value: string) {
    this._baseOsRetryTime = value;
  }
  public resetBaseOsRetryTime() {
    this._baseOsRetryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseOsRetryTimeInput() {
    return this._baseOsRetryTime;
  }

  // client_ip - computed: false, optional: true, required: false
  private _clientIp?: string; 
  public get clientIp() {
    return this.getStringAttribute('client_ip');
  }
  public set clientIp(value: string) {
    this._clientIp = value;
  }
  public resetClientIp() {
    this._clientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp;
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // debug_knob - computed: true, optional: false, required: false
  private _debugKnob = new DataZedcloudEdgenodeDebugKnobList(this, "debug_knob", false);
  public get debugKnob() {
    return this._debugKnob;
  }

  // deployment_tag - computed: false, optional: true, required: false
  private _deploymentTag?: string; 
  public get deploymentTag() {
    return this.getStringAttribute('deployment_tag');
  }
  public set deploymentTag(value: string) {
    this._deploymentTag = value;
  }
  public resetDeploymentTag() {
    this._deploymentTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTagInput() {
    return this._deploymentTag;
  }

  // deprecated - computed: false, optional: true, required: false
  private _deprecated?: string; 
  public get deprecated() {
    return this.getStringAttribute('deprecated');
  }
  public set deprecated(value: string) {
    this._deprecated = value;
  }
  public resetDeprecated() {
    this._deprecated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecatedInput() {
    return this._deprecated;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // generate_soft_serial - computed: false, optional: true, required: false
  private _generateSoftSerial?: boolean | cdktf.IResolvable; 
  public get generateSoftSerial() {
    return this.getBooleanAttribute('generate_soft_serial');
  }
  public set generateSoftSerial(value: boolean | cdktf.IResolvable) {
    this._generateSoftSerial = value;
  }
  public resetGenerateSoftSerial() {
    this._generateSoftSerial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateSoftSerialInput() {
    return this._generateSoftSerial;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity - computed: true, optional: true, required: false
  private _identity?: string; 
  public get identity() {
    return this.getStringAttribute('identity');
  }
  public set identity(value: string) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // model_id - computed: false, optional: false, required: true
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // onboarding_key - computed: true, optional: true, required: false
  private _onboardingKey?: string; 
  public get onboardingKey() {
    return this.getStringAttribute('onboarding_key');
  }
  public set onboardingKey(value: string) {
    this._onboardingKey = value;
  }
  public resetOnboardingKey() {
    this._onboardingKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onboardingKeyInput() {
    return this._onboardingKey;
  }

  // prepare_power_off_counter - computed: false, optional: true, required: false
  private _preparePowerOffCounter?: number; 
  public get preparePowerOffCounter() {
    return this.getNumberAttribute('prepare_power_off_counter');
  }
  public set preparePowerOffCounter(value: number) {
    this._preparePowerOffCounter = value;
  }
  public resetPreparePowerOffCounter() {
    this._preparePowerOffCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preparePowerOffCounterInput() {
    return this._preparePowerOffCounter;
  }

  // prepare_power_off_time - computed: false, optional: true, required: false
  private _preparePowerOffTime?: string; 
  public get preparePowerOffTime() {
    return this.getStringAttribute('prepare_power_off_time');
  }
  public set preparePowerOffTime(value: string) {
    this._preparePowerOffTime = value;
  }
  public resetPreparePowerOffTime() {
    this._preparePowerOffTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preparePowerOffTimeInput() {
    return this._preparePowerOffTime;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // reset_counter - computed: true, optional: true, required: false
  private _resetCounter?: number; 
  public get resetCounter() {
    return this.getNumberAttribute('reset_counter');
  }
  public set resetCounter(value: number) {
    this._resetCounter = value;
  }
  public resetResetCounter() {
    this._resetCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetCounterInput() {
    return this._resetCounter;
  }

  // reset_time - computed: true, optional: true, required: false
  private _resetTime?: string; 
  public get resetTime() {
    return this.getStringAttribute('reset_time');
  }
  public set resetTime(value: string) {
    this._resetTime = value;
  }
  public resetResetTime() {
    this._resetTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetTimeInput() {
    return this._resetTime;
  }

  // serialno - computed: false, optional: true, required: false
  private _serialno?: string; 
  public get serialno() {
    return this.getStringAttribute('serialno');
  }
  public set serialno(value: string) {
    this._serialno = value;
  }
  public resetSerialno() {
    this._serialno = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialnoInput() {
    return this._serialno;
  }

  // site_pictures - computed: false, optional: true, required: false
  private _sitePictures?: string[]; 
  public get sitePictures() {
    return cdktf.Fn.tolist(this.getListAttribute('site_pictures'));
  }
  public set sitePictures(value: string[]) {
    this._sitePictures = value;
  }
  public resetSitePictures() {
    this._sitePictures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sitePicturesInput() {
    return this._sitePictures;
  }

  // storage - computed: false, optional: true, required: false
  private _storage?: number; 
  public get storage() {
    return this.getNumberAttribute('storage');
  }
  public set storage(value: number) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // thread - computed: false, optional: true, required: false
  private _thread?: number; 
  public get thread() {
    return this.getNumberAttribute('thread');
  }
  public set thread(value: number) {
    this._thread = value;
  }
  public resetThread() {
    this._thread = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadInput() {
    return this._thread;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // utype - computed: true, optional: true, required: false
  private _utype?: string; 
  public get utype() {
    return this.getStringAttribute('utype');
  }
  public set utype(value: string) {
    this._utype = value;
  }
  public resetUtype() {
    this._utype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utypeInput() {
    return this._utype;
  }

  // base_image - computed: false, optional: true, required: false
  private _baseImage = new DataZedcloudEdgenodeBaseImageList(this, "base_image", false);
  public get baseImage() {
    return this._baseImage;
  }
  public putBaseImage(value: DataZedcloudEdgenodeBaseImage[] | cdktf.IResolvable) {
    this._baseImage.internalValue = value;
  }
  public resetBaseImage() {
    this._baseImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseImageInput() {
    return this._baseImage.internalValue;
  }

  // config_item - computed: false, optional: true, required: false
  private _configItem = new DataZedcloudEdgenodeConfigItemList(this, "config_item", false);
  public get configItem() {
    return this._configItem;
  }
  public putConfigItem(value: DataZedcloudEdgenodeConfigItem[] | cdktf.IResolvable) {
    this._configItem.internalValue = value;
  }
  public resetConfigItem() {
    this._configItem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configItemInput() {
    return this._configItem.internalValue;
  }

  // default_net_inst - computed: false, optional: true, required: false
  private _defaultNetInst = new DataZedcloudEdgenodeDefaultNetInstList(this, "default_net_inst", false);
  public get defaultNetInst() {
    return this._defaultNetInst;
  }
  public putDefaultNetInst(value: DataZedcloudEdgenodeDefaultNetInst[] | cdktf.IResolvable) {
    this._defaultNetInst.internalValue = value;
  }
  public resetDefaultNetInst() {
    this._defaultNetInst.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNetInstInput() {
    return this._defaultNetInst.internalValue;
  }

  // dev_location - computed: false, optional: true, required: false
  private _devLocation = new DataZedcloudEdgenodeDevLocationList(this, "dev_location", false);
  public get devLocation() {
    return this._devLocation;
  }
  public putDevLocation(value: DataZedcloudEdgenodeDevLocation[] | cdktf.IResolvable) {
    this._devLocation.internalValue = value;
  }
  public resetDevLocation() {
    this._devLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devLocationInput() {
    return this._devLocation.internalValue;
  }

  // dlisp - computed: false, optional: true, required: false
  private _dlisp = new DataZedcloudEdgenodeDlispList(this, "dlisp", false);
  public get dlisp() {
    return this._dlisp;
  }
  public putDlisp(value: DataZedcloudEdgenodeDlisp[] | cdktf.IResolvable) {
    this._dlisp.internalValue = value;
  }
  public resetDlisp() {
    this._dlisp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlispInput() {
    return this._dlisp.internalValue;
  }

  // edgeviewconfig - computed: false, optional: true, required: false
  private _edgeviewconfig = new DataZedcloudEdgenodeEdgeviewconfigList(this, "edgeviewconfig", false);
  public get edgeviewconfig() {
    return this._edgeviewconfig;
  }
  public putEdgeviewconfig(value: DataZedcloudEdgenodeEdgeviewconfig[] | cdktf.IResolvable) {
    this._edgeviewconfig.internalValue = value;
  }
  public resetEdgeviewconfig() {
    this._edgeviewconfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeviewconfigInput() {
    return this._edgeviewconfig.internalValue;
  }

  // interfaces - computed: false, optional: false, required: true
  private _interfaces = new DataZedcloudEdgenodeInterfacesList(this, "interfaces", true);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: DataZedcloudEdgenodeInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // revision - computed: false, optional: true, required: false
  private _revision = new DataZedcloudEdgenodeRevisionList(this, "revision", false);
  public get revision() {
    return this._revision;
  }
  public putRevision(value: DataZedcloudEdgenodeRevision[] | cdktf.IResolvable) {
    this._revision.internalValue = value;
  }
  public resetRevision() {
    this._revision.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_state: cdktf.stringToTerraform(this._adminState),
      asset_id: cdktf.stringToTerraform(this._assetId),
      base_os_retry_counter: cdktf.numberToTerraform(this._baseOsRetryCounter),
      base_os_retry_time: cdktf.stringToTerraform(this._baseOsRetryTime),
      client_ip: cdktf.stringToTerraform(this._clientIp),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      cpu: cdktf.numberToTerraform(this._cpu),
      deployment_tag: cdktf.stringToTerraform(this._deploymentTag),
      deprecated: cdktf.stringToTerraform(this._deprecated),
      description: cdktf.stringToTerraform(this._description),
      generate_soft_serial: cdktf.booleanToTerraform(this._generateSoftSerial),
      identity: cdktf.stringToTerraform(this._identity),
      location: cdktf.stringToTerraform(this._location),
      memory: cdktf.numberToTerraform(this._memory),
      model_id: cdktf.stringToTerraform(this._modelId),
      name: cdktf.stringToTerraform(this._name),
      onboarding_key: cdktf.stringToTerraform(this._onboardingKey),
      prepare_power_off_counter: cdktf.numberToTerraform(this._preparePowerOffCounter),
      prepare_power_off_time: cdktf.stringToTerraform(this._preparePowerOffTime),
      project_id: cdktf.stringToTerraform(this._projectId),
      reset_counter: cdktf.numberToTerraform(this._resetCounter),
      reset_time: cdktf.stringToTerraform(this._resetTime),
      serialno: cdktf.stringToTerraform(this._serialno),
      site_pictures: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sitePictures),
      storage: cdktf.numberToTerraform(this._storage),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      thread: cdktf.numberToTerraform(this._thread),
      title: cdktf.stringToTerraform(this._title),
      token: cdktf.stringToTerraform(this._token),
      utype: cdktf.stringToTerraform(this._utype),
      base_image: cdktf.listMapper(dataZedcloudEdgenodeBaseImageToTerraform, true)(this._baseImage.internalValue),
      config_item: cdktf.listMapper(dataZedcloudEdgenodeConfigItemToTerraform, true)(this._configItem.internalValue),
      default_net_inst: cdktf.listMapper(dataZedcloudEdgenodeDefaultNetInstToTerraform, true)(this._defaultNetInst.internalValue),
      dev_location: cdktf.listMapper(dataZedcloudEdgenodeDevLocationToTerraform, true)(this._devLocation.internalValue),
      dlisp: cdktf.listMapper(dataZedcloudEdgenodeDlispToTerraform, true)(this._dlisp.internalValue),
      edgeviewconfig: cdktf.listMapper(dataZedcloudEdgenodeEdgeviewconfigToTerraform, true)(this._edgeviewconfig.internalValue),
      interfaces: cdktf.listMapper(dataZedcloudEdgenodeInterfacesToTerraform, true)(this._interfaces.internalValue),
      revision: cdktf.listMapper(dataZedcloudEdgenodeRevisionToTerraform, true)(this._revision.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_state: {
        value: cdktf.stringToHclTerraform(this._adminState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asset_id: {
        value: cdktf.stringToHclTerraform(this._assetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_os_retry_counter: {
        value: cdktf.numberToHclTerraform(this._baseOsRetryCounter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      base_os_retry_time: {
        value: cdktf.stringToHclTerraform(this._baseOsRetryTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_ip: {
        value: cdktf.stringToHclTerraform(this._clientIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu: {
        value: cdktf.numberToHclTerraform(this._cpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deployment_tag: {
        value: cdktf.stringToHclTerraform(this._deploymentTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deprecated: {
        value: cdktf.stringToHclTerraform(this._deprecated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generate_soft_serial: {
        value: cdktf.booleanToHclTerraform(this._generateSoftSerial),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      identity: {
        value: cdktf.stringToHclTerraform(this._identity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory: {
        value: cdktf.numberToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      model_id: {
        value: cdktf.stringToHclTerraform(this._modelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      onboarding_key: {
        value: cdktf.stringToHclTerraform(this._onboardingKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prepare_power_off_counter: {
        value: cdktf.numberToHclTerraform(this._preparePowerOffCounter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prepare_power_off_time: {
        value: cdktf.stringToHclTerraform(this._preparePowerOffTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reset_counter: {
        value: cdktf.numberToHclTerraform(this._resetCounter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reset_time: {
        value: cdktf.stringToHclTerraform(this._resetTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serialno: {
        value: cdktf.stringToHclTerraform(this._serialno),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_pictures: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sitePictures),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      storage: {
        value: cdktf.numberToHclTerraform(this._storage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      thread: {
        value: cdktf.numberToHclTerraform(this._thread),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      utype: {
        value: cdktf.stringToHclTerraform(this._utype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_image: {
        value: cdktf.listMapperHcl(dataZedcloudEdgenodeBaseImageToHclTerraform, true)(this._baseImage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataZedcloudEdgenodeBaseImageList",
      },
      config_item: {
        value: cdktf.listMapperHcl(dataZedcloudEdgenodeConfigItemToHclTerraform, true)(this._configItem.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataZedcloudEdgenodeConfigItemList",
      },
      default_net_inst: {
        value: cdktf.listMapperHcl(dataZedcloudEdgenodeDefaultNetInstToHclTerraform, true)(this._defaultNetInst.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataZedcloudEdgenodeDefaultNetInstList",
      },
      dev_location: {
        value: cdktf.listMapperHcl(dataZedcloudEdgenodeDevLocationToHclTerraform, true)(this._devLocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataZedcloudEdgenodeDevLocationList",
      },
      dlisp: {
        value: cdktf.listMapperHcl(dataZedcloudEdgenodeDlispToHclTerraform, true)(this._dlisp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataZedcloudEdgenodeDlispList",
      },
      edgeviewconfig: {
        value: cdktf.listMapperHcl(dataZedcloudEdgenodeEdgeviewconfigToHclTerraform, true)(this._edgeviewconfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataZedcloudEdgenodeEdgeviewconfigList",
      },
      interfaces: {
        value: cdktf.listMapperHcl(dataZedcloudEdgenodeInterfacesToHclTerraform, true)(this._interfaces.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataZedcloudEdgenodeInterfacesList",
      },
      revision: {
        value: cdktf.listMapperHcl(dataZedcloudEdgenodeRevisionToHclTerraform, true)(this._revision.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataZedcloudEdgenodeRevisionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

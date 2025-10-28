// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/business_sda_wireless_controller_create
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BusinessSdaWirelessControllerCreateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/business_sda_wireless_controller_create#id BusinessSdaWirelessControllerCreate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/business_sda_wireless_controller_create#parameters BusinessSdaWirelessControllerCreate#parameters}
  */
  readonly parameters: BusinessSdaWirelessControllerCreateParameters;
}
export interface BusinessSdaWirelessControllerCreateItem {
}

export function businessSdaWirelessControllerCreateItemToTerraform(struct?: BusinessSdaWirelessControllerCreateItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function businessSdaWirelessControllerCreateItemToHclTerraform(struct?: BusinessSdaWirelessControllerCreateItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BusinessSdaWirelessControllerCreateItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BusinessSdaWirelessControllerCreateItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessSdaWirelessControllerCreateItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // execution_id - computed: true, optional: false, required: false
  public get executionId() {
    return this.getStringAttribute('execution_id');
  }

  // execution_status_url - computed: true, optional: false, required: false
  public get executionStatusUrl() {
    return this.getStringAttribute('execution_status_url');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class BusinessSdaWirelessControllerCreateItemList extends cdktf.ComplexList {

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
  public get(index: number): BusinessSdaWirelessControllerCreateItemOutputReference {
    return new BusinessSdaWirelessControllerCreateItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BusinessSdaWirelessControllerCreateParameters {
  /**
  * EWLC Device Name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/business_sda_wireless_controller_create#device_name BusinessSdaWirelessControllerCreate#device_name}
  */
  readonly deviceName?: string;
  /**
  * Site Name Hierarchy
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/business_sda_wireless_controller_create#site_name_hierarchy BusinessSdaWirelessControllerCreate#site_name_hierarchy}
  */
  readonly siteNameHierarchy?: string;
}

export function businessSdaWirelessControllerCreateParametersToTerraform(struct?: BusinessSdaWirelessControllerCreateParametersOutputReference | BusinessSdaWirelessControllerCreateParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    site_name_hierarchy: cdktf.stringToTerraform(struct!.siteNameHierarchy),
  }
}


export function businessSdaWirelessControllerCreateParametersToHclTerraform(struct?: BusinessSdaWirelessControllerCreateParametersOutputReference | BusinessSdaWirelessControllerCreateParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_name: {
      value: cdktf.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_name_hierarchy: {
      value: cdktf.stringToHclTerraform(struct!.siteNameHierarchy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BusinessSdaWirelessControllerCreateParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BusinessSdaWirelessControllerCreateParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._siteNameHierarchy !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteNameHierarchy = this._siteNameHierarchy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessSdaWirelessControllerCreateParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deviceName = undefined;
      this._siteNameHierarchy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deviceName = value.deviceName;
      this._siteNameHierarchy = value.siteNameHierarchy;
    }
  }

  // device_name - computed: false, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // site_name_hierarchy - computed: false, optional: true, required: false
  private _siteNameHierarchy?: string; 
  public get siteNameHierarchy() {
    return this.getStringAttribute('site_name_hierarchy');
  }
  public set siteNameHierarchy(value: string) {
    this._siteNameHierarchy = value;
  }
  public resetSiteNameHierarchy() {
    this._siteNameHierarchy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteNameHierarchyInput() {
    return this._siteNameHierarchy;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/business_sda_wireless_controller_create dnacenter_business_sda_wireless_controller_create}
*/
export class BusinessSdaWirelessControllerCreate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_business_sda_wireless_controller_create";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BusinessSdaWirelessControllerCreate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BusinessSdaWirelessControllerCreate to import
  * @param importFromId The id of the existing BusinessSdaWirelessControllerCreate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/business_sda_wireless_controller_create#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BusinessSdaWirelessControllerCreate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_business_sda_wireless_controller_create", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/business_sda_wireless_controller_create dnacenter_business_sda_wireless_controller_create} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BusinessSdaWirelessControllerCreateConfig
  */
  public constructor(scope: Construct, id: string, config: BusinessSdaWirelessControllerCreateConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_business_sda_wireless_controller_create',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
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
    this._parameters.internalValue = config.parameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // item - computed: true, optional: false, required: false
  private _item = new BusinessSdaWirelessControllerCreateItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new BusinessSdaWirelessControllerCreateParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: BusinessSdaWirelessControllerCreateParameters) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: businessSdaWirelessControllerCreateParametersToTerraform(this._parameters.internalValue),
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
      parameters: {
        value: businessSdaWirelessControllerCreateParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BusinessSdaWirelessControllerCreateParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

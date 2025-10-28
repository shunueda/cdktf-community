// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_control_plane_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SdaFabricControlPlaneDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_control_plane_device#id SdaFabricControlPlaneDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_control_plane_device#parameters SdaFabricControlPlaneDevice#parameters}
  */
  readonly parameters?: SdaFabricControlPlaneDeviceParameters[] | cdktf.IResolvable;
}
export interface SdaFabricControlPlaneDeviceItem {
}

export function sdaFabricControlPlaneDeviceItemToTerraform(struct?: SdaFabricControlPlaneDeviceItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sdaFabricControlPlaneDeviceItemToHclTerraform(struct?: SdaFabricControlPlaneDeviceItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SdaFabricControlPlaneDeviceItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SdaFabricControlPlaneDeviceItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdaFabricControlPlaneDeviceItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_management_ip_address - computed: true, optional: false, required: false
  public get deviceManagementIpAddress() {
    return this.getStringAttribute('device_management_ip_address');
  }

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return this.getStringAttribute('roles');
  }

  // route_distribution_protocol - computed: true, optional: false, required: false
  public get routeDistributionProtocol() {
    return this.getStringAttribute('route_distribution_protocol');
  }

  // site_name_hierarchy - computed: true, optional: false, required: false
  public get siteNameHierarchy() {
    return this.getStringAttribute('site_name_hierarchy');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class SdaFabricControlPlaneDeviceItemList extends cdktf.ComplexList {

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
  public get(index: number): SdaFabricControlPlaneDeviceItemOutputReference {
    return new SdaFabricControlPlaneDeviceItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SdaFabricControlPlaneDeviceParameters {
  /**
  * Management Ip Address of the Device which is provisioned successfully
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_control_plane_device#device_management_ip_address SdaFabricControlPlaneDevice#device_management_ip_address}
  */
  readonly deviceManagementIpAddress?: string;
  /**
  * Route Distribution Protocol for Control Plane Device. Allowed values are "LISP_BGP" or "LISP_PUB_SUB". Default value is "LISP_BGP"
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_control_plane_device#route_distribution_protocol SdaFabricControlPlaneDevice#route_distribution_protocol}
  */
  readonly routeDistributionProtocol?: string;
  /**
  * siteNameHierarchy of the Provisioned Device(site should be part of Fabric Site)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_control_plane_device#site_name_hierarchy SdaFabricControlPlaneDevice#site_name_hierarchy}
  */
  readonly siteNameHierarchy?: string;
}

export function sdaFabricControlPlaneDeviceParametersToTerraform(struct?: SdaFabricControlPlaneDeviceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_management_ip_address: cdktf.stringToTerraform(struct!.deviceManagementIpAddress),
    route_distribution_protocol: cdktf.stringToTerraform(struct!.routeDistributionProtocol),
    site_name_hierarchy: cdktf.stringToTerraform(struct!.siteNameHierarchy),
  }
}


export function sdaFabricControlPlaneDeviceParametersToHclTerraform(struct?: SdaFabricControlPlaneDeviceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_management_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.deviceManagementIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_distribution_protocol: {
      value: cdktf.stringToHclTerraform(struct!.routeDistributionProtocol),
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

export class SdaFabricControlPlaneDeviceParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SdaFabricControlPlaneDeviceParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceManagementIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceManagementIpAddress = this._deviceManagementIpAddress;
    }
    if (this._routeDistributionProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeDistributionProtocol = this._routeDistributionProtocol;
    }
    if (this._siteNameHierarchy !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteNameHierarchy = this._siteNameHierarchy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdaFabricControlPlaneDeviceParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceManagementIpAddress = undefined;
      this._routeDistributionProtocol = undefined;
      this._siteNameHierarchy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceManagementIpAddress = value.deviceManagementIpAddress;
      this._routeDistributionProtocol = value.routeDistributionProtocol;
      this._siteNameHierarchy = value.siteNameHierarchy;
    }
  }

  // device_management_ip_address - computed: true, optional: true, required: false
  private _deviceManagementIpAddress?: string; 
  public get deviceManagementIpAddress() {
    return this.getStringAttribute('device_management_ip_address');
  }
  public set deviceManagementIpAddress(value: string) {
    this._deviceManagementIpAddress = value;
  }
  public resetDeviceManagementIpAddress() {
    this._deviceManagementIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceManagementIpAddressInput() {
    return this._deviceManagementIpAddress;
  }

  // route_distribution_protocol - computed: true, optional: true, required: false
  private _routeDistributionProtocol?: string; 
  public get routeDistributionProtocol() {
    return this.getStringAttribute('route_distribution_protocol');
  }
  public set routeDistributionProtocol(value: string) {
    this._routeDistributionProtocol = value;
  }
  public resetRouteDistributionProtocol() {
    this._routeDistributionProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeDistributionProtocolInput() {
    return this._routeDistributionProtocol;
  }

  // site_name_hierarchy - computed: true, optional: true, required: false
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

export class SdaFabricControlPlaneDeviceParametersList extends cdktf.ComplexList {
  public internalValue? : SdaFabricControlPlaneDeviceParameters[] | cdktf.IResolvable

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
  public get(index: number): SdaFabricControlPlaneDeviceParametersOutputReference {
    return new SdaFabricControlPlaneDeviceParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_control_plane_device dnacenter_sda_fabric_control_plane_device}
*/
export class SdaFabricControlPlaneDevice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_sda_fabric_control_plane_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SdaFabricControlPlaneDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SdaFabricControlPlaneDevice to import
  * @param importFromId The id of the existing SdaFabricControlPlaneDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_control_plane_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SdaFabricControlPlaneDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_sda_fabric_control_plane_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_control_plane_device dnacenter_sda_fabric_control_plane_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SdaFabricControlPlaneDeviceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SdaFabricControlPlaneDeviceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_sda_fabric_control_plane_device',
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
  private _item = new SdaFabricControlPlaneDeviceItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new SdaFabricControlPlaneDeviceParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: SdaFabricControlPlaneDeviceParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
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
      parameters: cdktf.listMapper(sdaFabricControlPlaneDeviceParametersToTerraform, true)(this._parameters.internalValue),
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
        value: cdktf.listMapperHcl(sdaFabricControlPlaneDeviceParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SdaFabricControlPlaneDeviceParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

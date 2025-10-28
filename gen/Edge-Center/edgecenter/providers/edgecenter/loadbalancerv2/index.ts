// https://registry.terraform.io/providers/edge-center/edgecenter/0.10.3/docs/resources/loadbalancerv2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Loadbalancerv2Config extends cdktf.TerraformMetaArguments {
  /**
  * The flavor or specification of the load balancer to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.3/docs/resources/loadbalancerv2#flavor Loadbalancerv2#flavor}
  */
  readonly flavor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.3/docs/resources/loadbalancerv2#id Loadbalancerv2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The timestamp of the last update (use with update context).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.3/docs/resources/loadbalancerv2#last_updated Loadbalancerv2#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * A map containing metadata, for example tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.3/docs/resources/loadbalancerv2#metadata_map Loadbalancerv2#metadata_map}
  */
  readonly metadataMap?: { [key: string]: string };
  /**
  * The name of the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.3/docs/resources/loadbalancerv2#name Loadbalancerv2#name}
  */
  readonly name: string;
  /**
  * The uuid of the project. Either 'project_id' or 'project_name' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.3/docs/resources/loadbalancerv2#project_id Loadbalancerv2#project_id}
  */
  readonly projectId?: number;
  /**
  * The name of the project. Either 'project_id' or 'project_name' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.3/docs/resources/loadbalancerv2#project_name Loadbalancerv2#project_name}
  */
  readonly projectName?: string;
  /**
  * The uuid of the region. Either 'region_id' or 'region_name' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.3/docs/resources/loadbalancerv2#region_id Loadbalancerv2#region_id}
  */
  readonly regionId?: number;
  /**
  * The name of the region. Either 'region_id' or 'region_name' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.3/docs/resources/loadbalancerv2#region_name Loadbalancerv2#region_name}
  */
  readonly regionName?: string;
  /**
  * Attaches the created network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.3/docs/resources/loadbalancerv2#vip_network_id Loadbalancerv2#vip_network_id}
  */
  readonly vipNetworkId?: string;
  /**
  * Attaches the created reserved IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.3/docs/resources/loadbalancerv2#vip_port_id Loadbalancerv2#vip_port_id}
  */
  readonly vipPortId?: string;
  /**
  * The ID of the subnet in which to allocate the VIP address for the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.3/docs/resources/loadbalancerv2#vip_subnet_id Loadbalancerv2#vip_subnet_id}
  */
  readonly vipSubnetId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.3/docs/resources/loadbalancerv2#timeouts Loadbalancerv2#timeouts}
  */
  readonly timeouts?: Loadbalancerv2Timeouts;
}
export interface Loadbalancerv2MetadataReadOnly {
}

export function loadbalancerv2MetadataReadOnlyToTerraform(struct?: Loadbalancerv2MetadataReadOnly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function loadbalancerv2MetadataReadOnlyToHclTerraform(struct?: Loadbalancerv2MetadataReadOnly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Loadbalancerv2MetadataReadOnlyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Loadbalancerv2MetadataReadOnly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Loadbalancerv2MetadataReadOnly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class Loadbalancerv2MetadataReadOnlyList extends cdktf.ComplexList {

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
  public get(index: number): Loadbalancerv2MetadataReadOnlyOutputReference {
    return new Loadbalancerv2MetadataReadOnlyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Loadbalancerv2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.3/docs/resources/loadbalancerv2#create Loadbalancerv2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.3/docs/resources/loadbalancerv2#delete Loadbalancerv2#delete}
  */
  readonly delete?: string;
}

export function loadbalancerv2TimeoutsToTerraform(struct?: Loadbalancerv2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function loadbalancerv2TimeoutsToHclTerraform(struct?: Loadbalancerv2Timeouts | cdktf.IResolvable): any {
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

export class Loadbalancerv2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Loadbalancerv2Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Loadbalancerv2Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.3/docs/resources/loadbalancerv2 edgecenter_loadbalancerv2}
*/
export class Loadbalancerv2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "edgecenter_loadbalancerv2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Loadbalancerv2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Loadbalancerv2 to import
  * @param importFromId The id of the existing Loadbalancerv2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.3/docs/resources/loadbalancerv2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Loadbalancerv2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "edgecenter_loadbalancerv2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.3/docs/resources/loadbalancerv2 edgecenter_loadbalancerv2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Loadbalancerv2Config
  */
  public constructor(scope: Construct, id: string, config: Loadbalancerv2Config) {
    super(scope, id, {
      terraformResourceType: 'edgecenter_loadbalancerv2',
      terraformGeneratorMetadata: {
        providerName: 'edgecenter',
        providerVersion: '0.10.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._flavor = config.flavor;
    this._id = config.id;
    this._lastUpdated = config.lastUpdated;
    this._metadataMap = config.metadataMap;
    this._name = config.name;
    this._projectId = config.projectId;
    this._projectName = config.projectName;
    this._regionId = config.regionId;
    this._regionName = config.regionName;
    this._vipNetworkId = config.vipNetworkId;
    this._vipPortId = config.vipPortId;
    this._vipSubnetId = config.vipSubnetId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // flavor - computed: false, optional: true, required: false
  private _flavor?: string; 
  public get flavor() {
    return this.getStringAttribute('flavor');
  }
  public set flavor(value: string) {
    this._flavor = value;
  }
  public resetFlavor() {
    this._flavor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor;
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

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }

  // metadata_map - computed: false, optional: true, required: false
  private _metadataMap?: { [key: string]: string }; 
  public get metadataMap() {
    return this.getStringMapAttribute('metadata_map');
  }
  public set metadataMap(value: { [key: string]: string }) {
    this._metadataMap = value;
  }
  public resetMetadataMap() {
    this._metadataMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataMapInput() {
    return this._metadataMap;
  }

  // metadata_read_only - computed: true, optional: false, required: false
  private _metadataReadOnly = new Loadbalancerv2MetadataReadOnlyList(this, "metadata_read_only", false);
  public get metadataReadOnly() {
    return this._metadataReadOnly;
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

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_name - computed: false, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // region_name - computed: false, optional: true, required: false
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  public resetRegionName() {
    this._regionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // vip_address - computed: true, optional: false, required: false
  public get vipAddress() {
    return this.getStringAttribute('vip_address');
  }

  // vip_network_id - computed: false, optional: true, required: false
  private _vipNetworkId?: string; 
  public get vipNetworkId() {
    return this.getStringAttribute('vip_network_id');
  }
  public set vipNetworkId(value: string) {
    this._vipNetworkId = value;
  }
  public resetVipNetworkId() {
    this._vipNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipNetworkIdInput() {
    return this._vipNetworkId;
  }

  // vip_port_id - computed: false, optional: true, required: false
  private _vipPortId?: string; 
  public get vipPortId() {
    return this.getStringAttribute('vip_port_id');
  }
  public set vipPortId(value: string) {
    this._vipPortId = value;
  }
  public resetVipPortId() {
    this._vipPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipPortIdInput() {
    return this._vipPortId;
  }

  // vip_subnet_id - computed: false, optional: true, required: false
  private _vipSubnetId?: string; 
  public get vipSubnetId() {
    return this.getStringAttribute('vip_subnet_id');
  }
  public set vipSubnetId(value: string) {
    this._vipSubnetId = value;
  }
  public resetVipSubnetId() {
    this._vipSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipSubnetIdInput() {
    return this._vipSubnetId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new Loadbalancerv2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: Loadbalancerv2Timeouts) {
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
      flavor: cdktf.stringToTerraform(this._flavor),
      id: cdktf.stringToTerraform(this._id),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      metadata_map: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadataMap),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.numberToTerraform(this._projectId),
      project_name: cdktf.stringToTerraform(this._projectName),
      region_id: cdktf.numberToTerraform(this._regionId),
      region_name: cdktf.stringToTerraform(this._regionName),
      vip_network_id: cdktf.stringToTerraform(this._vipNetworkId),
      vip_port_id: cdktf.stringToTerraform(this._vipPortId),
      vip_subnet_id: cdktf.stringToTerraform(this._vipSubnetId),
      timeouts: loadbalancerv2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      flavor: {
        value: cdktf.stringToHclTerraform(this._flavor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_updated: {
        value: cdktf.stringToHclTerraform(this._lastUpdated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata_map: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadataMap),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.numberToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region_name: {
        value: cdktf.stringToHclTerraform(this._regionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vip_network_id: {
        value: cdktf.stringToHclTerraform(this._vipNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vip_port_id: {
        value: cdktf.stringToHclTerraform(this._vipPortId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vip_subnet_id: {
        value: cdktf.stringToHclTerraform(this._vipSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: loadbalancerv2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Loadbalancerv2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

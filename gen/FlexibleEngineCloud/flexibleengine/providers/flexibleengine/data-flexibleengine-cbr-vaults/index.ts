// https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/data-sources/cbr_vaults
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFlexibleengineCbrVaultsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to enable automatic expansion of the backup protection type vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/data-sources/cbr_vaults#auto_expand_enabled DataFlexibleengineCbrVaults#auto_expand_enabled}
  */
  readonly autoExpandEnabled?: boolean | cdktf.IResolvable;
  /**
  * The consistent level (specification) of the vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/data-sources/cbr_vaults#consistent_level DataFlexibleengineCbrVaults#consistent_level}
  */
  readonly consistentLevel?: string;
  /**
  * The ID of the enterprise project to which the vault belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/data-sources/cbr_vaults#enterprise_project_id DataFlexibleengineCbrVaults#enterprise_project_id}
  */
  readonly enterpriseProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/data-sources/cbr_vaults#id DataFlexibleengineCbrVaults#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The vault name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/data-sources/cbr_vaults#name DataFlexibleengineCbrVaults#name}
  */
  readonly name?: string;
  /**
  * The ID of the policy associated with the vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/data-sources/cbr_vaults#policy_id DataFlexibleengineCbrVaults#policy_id}
  */
  readonly policyId?: string;
  /**
  * The protection type of the vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/data-sources/cbr_vaults#protection_type DataFlexibleengineCbrVaults#protection_type}
  */
  readonly protectionType?: string;
  /**
  * The region in which to query the vaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/data-sources/cbr_vaults#region DataFlexibleengineCbrVaults#region}
  */
  readonly region?: string;
  /**
  * The vault sapacity, in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/data-sources/cbr_vaults#size DataFlexibleengineCbrVaults#size}
  */
  readonly size?: number;
  /**
  * The vault status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/data-sources/cbr_vaults#status DataFlexibleengineCbrVaults#status}
  */
  readonly status?: string;
  /**
  * The object type of the vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/data-sources/cbr_vaults#type DataFlexibleengineCbrVaults#type}
  */
  readonly type?: string;
}
export interface DataFlexibleengineCbrVaultsVaultsResources {
}

export function dataFlexibleengineCbrVaultsVaultsResourcesToTerraform(struct?: DataFlexibleengineCbrVaultsVaultsResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFlexibleengineCbrVaultsVaultsResourcesToHclTerraform(struct?: DataFlexibleengineCbrVaultsVaultsResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFlexibleengineCbrVaultsVaultsResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFlexibleengineCbrVaultsVaultsResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFlexibleengineCbrVaultsVaultsResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // excludes - computed: true, optional: false, required: false
  public get excludes() {
    return this.getListAttribute('excludes');
  }

  // includes - computed: true, optional: false, required: false
  public get includes() {
    return this.getListAttribute('includes');
  }

  // server_id - computed: true, optional: false, required: false
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
}

export class DataFlexibleengineCbrVaultsVaultsResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataFlexibleengineCbrVaultsVaultsResourcesOutputReference {
    return new DataFlexibleengineCbrVaultsVaultsResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFlexibleengineCbrVaultsVaults {
}

export function dataFlexibleengineCbrVaultsVaultsToTerraform(struct?: DataFlexibleengineCbrVaultsVaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFlexibleengineCbrVaultsVaultsToHclTerraform(struct?: DataFlexibleengineCbrVaultsVaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFlexibleengineCbrVaultsVaultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFlexibleengineCbrVaultsVaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFlexibleengineCbrVaultsVaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocated - computed: true, optional: false, required: false
  public get allocated() {
    return this.getNumberAttribute('allocated');
  }

  // auto_expand_enabled - computed: true, optional: false, required: false
  public get autoExpandEnabled() {
    return this.getBooleanAttribute('auto_expand_enabled');
  }

  // consistent_level - computed: true, optional: false, required: false
  public get consistentLevel() {
    return this.getStringAttribute('consistent_level');
  }

  // enterprise_project_id - computed: true, optional: false, required: false
  public get enterpriseProjectId() {
    return this.getStringAttribute('enterprise_project_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // protection_type - computed: true, optional: false, required: false
  public get protectionType() {
    return this.getStringAttribute('protection_type');
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataFlexibleengineCbrVaultsVaultsResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // spec_code - computed: true, optional: false, required: false
  public get specCode() {
    return this.getStringAttribute('spec_code');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage - computed: true, optional: false, required: false
  public get storage() {
    return this.getStringAttribute('storage');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // used - computed: true, optional: false, required: false
  public get used() {
    return this.getNumberAttribute('used');
  }
}

export class DataFlexibleengineCbrVaultsVaultsList extends cdktf.ComplexList {

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
  public get(index: number): DataFlexibleengineCbrVaultsVaultsOutputReference {
    return new DataFlexibleengineCbrVaultsVaultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/data-sources/cbr_vaults flexibleengine_cbr_vaults}
*/
export class DataFlexibleengineCbrVaults extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "flexibleengine_cbr_vaults";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFlexibleengineCbrVaults resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFlexibleengineCbrVaults to import
  * @param importFromId The id of the existing DataFlexibleengineCbrVaults that should be imported. Refer to the {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/data-sources/cbr_vaults#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFlexibleengineCbrVaults to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "flexibleengine_cbr_vaults", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/data-sources/cbr_vaults flexibleengine_cbr_vaults} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFlexibleengineCbrVaultsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFlexibleengineCbrVaultsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'flexibleengine_cbr_vaults',
      terraformGeneratorMetadata: {
        providerName: 'flexibleengine',
        providerVersion: '1.46.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoExpandEnabled = config.autoExpandEnabled;
    this._consistentLevel = config.consistentLevel;
    this._enterpriseProjectId = config.enterpriseProjectId;
    this._id = config.id;
    this._name = config.name;
    this._policyId = config.policyId;
    this._protectionType = config.protectionType;
    this._region = config.region;
    this._size = config.size;
    this._status = config.status;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_expand_enabled - computed: false, optional: true, required: false
  private _autoExpandEnabled?: boolean | cdktf.IResolvable; 
  public get autoExpandEnabled() {
    return this.getBooleanAttribute('auto_expand_enabled');
  }
  public set autoExpandEnabled(value: boolean | cdktf.IResolvable) {
    this._autoExpandEnabled = value;
  }
  public resetAutoExpandEnabled() {
    this._autoExpandEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoExpandEnabledInput() {
    return this._autoExpandEnabled;
  }

  // consistent_level - computed: false, optional: true, required: false
  private _consistentLevel?: string; 
  public get consistentLevel() {
    return this.getStringAttribute('consistent_level');
  }
  public set consistentLevel(value: string) {
    this._consistentLevel = value;
  }
  public resetConsistentLevel() {
    this._consistentLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consistentLevelInput() {
    return this._consistentLevel;
  }

  // enterprise_project_id - computed: false, optional: true, required: false
  private _enterpriseProjectId?: string; 
  public get enterpriseProjectId() {
    return this.getStringAttribute('enterprise_project_id');
  }
  public set enterpriseProjectId(value: string) {
    this._enterpriseProjectId = value;
  }
  public resetEnterpriseProjectId() {
    this._enterpriseProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseProjectIdInput() {
    return this._enterpriseProjectId;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // policy_id - computed: false, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // protection_type - computed: false, optional: true, required: false
  private _protectionType?: string; 
  public get protectionType() {
    return this.getStringAttribute('protection_type');
  }
  public set protectionType(value: string) {
    this._protectionType = value;
  }
  public resetProtectionType() {
    this._protectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionTypeInput() {
    return this._protectionType;
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

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // vaults - computed: true, optional: false, required: false
  private _vaults = new DataFlexibleengineCbrVaultsVaultsList(this, "vaults", false);
  public get vaults() {
    return this._vaults;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_expand_enabled: cdktf.booleanToTerraform(this._autoExpandEnabled),
      consistent_level: cdktf.stringToTerraform(this._consistentLevel),
      enterprise_project_id: cdktf.stringToTerraform(this._enterpriseProjectId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      policy_id: cdktf.stringToTerraform(this._policyId),
      protection_type: cdktf.stringToTerraform(this._protectionType),
      region: cdktf.stringToTerraform(this._region),
      size: cdktf.numberToTerraform(this._size),
      status: cdktf.stringToTerraform(this._status),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_expand_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoExpandEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      consistent_level: {
        value: cdktf.stringToHclTerraform(this._consistentLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enterprise_project_id: {
        value: cdktf.stringToHclTerraform(this._enterpriseProjectId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protection_type: {
        value: cdktf.stringToHclTerraform(this._protectionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

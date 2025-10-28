// https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/data-sources/gcore_securitygroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGcoreSecuritygroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/data-sources/gcore_securitygroup#id DataGcoreSecuritygroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/data-sources/gcore_securitygroup#metadata_k DataGcoreSecuritygroup#metadata_k}
  */
  readonly metadataK?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/data-sources/gcore_securitygroup#metadata_kv DataGcoreSecuritygroup#metadata_kv}
  */
  readonly metadataKv?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/data-sources/gcore_securitygroup#name DataGcoreSecuritygroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/data-sources/gcore_securitygroup#project_id DataGcoreSecuritygroup#project_id}
  */
  readonly projectId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/data-sources/gcore_securitygroup#project_name DataGcoreSecuritygroup#project_name}
  */
  readonly projectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/data-sources/gcore_securitygroup#region_id DataGcoreSecuritygroup#region_id}
  */
  readonly regionId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/data-sources/gcore_securitygroup#region_name DataGcoreSecuritygroup#region_name}
  */
  readonly regionName?: string;
}
export interface DataGcoreSecuritygroupMetadataReadOnly {
}

export function dataGcoreSecuritygroupMetadataReadOnlyToTerraform(struct?: DataGcoreSecuritygroupMetadataReadOnly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGcoreSecuritygroupMetadataReadOnlyToHclTerraform(struct?: DataGcoreSecuritygroupMetadataReadOnly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGcoreSecuritygroupMetadataReadOnlyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGcoreSecuritygroupMetadataReadOnly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGcoreSecuritygroupMetadataReadOnly | undefined) {
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

export class DataGcoreSecuritygroupMetadataReadOnlyList extends cdktf.ComplexList {

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
  public get(index: number): DataGcoreSecuritygroupMetadataReadOnlyOutputReference {
    return new DataGcoreSecuritygroupMetadataReadOnlyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGcoreSecuritygroupSecurityGroupRules {
}

export function dataGcoreSecuritygroupSecurityGroupRulesToTerraform(struct?: DataGcoreSecuritygroupSecurityGroupRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGcoreSecuritygroupSecurityGroupRulesToHclTerraform(struct?: DataGcoreSecuritygroupSecurityGroupRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGcoreSecuritygroupSecurityGroupRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGcoreSecuritygroupSecurityGroupRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGcoreSecuritygroupSecurityGroupRules | undefined) {
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // ethertype - computed: true, optional: false, required: false
  public get ethertype() {
    return this.getStringAttribute('ethertype');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // port_range_max - computed: true, optional: false, required: false
  public get portRangeMax() {
    return this.getNumberAttribute('port_range_max');
  }

  // port_range_min - computed: true, optional: false, required: false
  public get portRangeMin() {
    return this.getNumberAttribute('port_range_min');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // remote_ip_prefix - computed: true, optional: false, required: false
  public get remoteIpPrefix() {
    return this.getStringAttribute('remote_ip_prefix');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class DataGcoreSecuritygroupSecurityGroupRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataGcoreSecuritygroupSecurityGroupRulesOutputReference {
    return new DataGcoreSecuritygroupSecurityGroupRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/data-sources/gcore_securitygroup gcore_securitygroup}
*/
export class DataGcoreSecuritygroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_securitygroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGcoreSecuritygroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGcoreSecuritygroup to import
  * @param importFromId The id of the existing DataGcoreSecuritygroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/data-sources/gcore_securitygroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGcoreSecuritygroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_securitygroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/data-sources/gcore_securitygroup gcore_securitygroup} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGcoreSecuritygroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataGcoreSecuritygroupConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_securitygroup',
      terraformGeneratorMetadata: {
        providerName: 'gcorelabs',
        providerVersion: '0.3.63'
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
    this._metadataK = config.metadataK;
    this._metadataKv = config.metadataKv;
    this._name = config.name;
    this._projectId = config.projectId;
    this._projectName = config.projectName;
    this._regionId = config.regionId;
    this._regionName = config.regionName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // metadata_k - computed: false, optional: true, required: false
  private _metadataK?: string; 
  public get metadataK() {
    return this.getStringAttribute('metadata_k');
  }
  public set metadataK(value: string) {
    this._metadataK = value;
  }
  public resetMetadataK() {
    this._metadataK = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataKInput() {
    return this._metadataK;
  }

  // metadata_kv - computed: false, optional: true, required: false
  private _metadataKv?: { [key: string]: string }; 
  public get metadataKv() {
    return this.getStringMapAttribute('metadata_kv');
  }
  public set metadataKv(value: { [key: string]: string }) {
    this._metadataKv = value;
  }
  public resetMetadataKv() {
    this._metadataKv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataKvInput() {
    return this._metadataKv;
  }

  // metadata_read_only - computed: true, optional: false, required: false
  private _metadataReadOnly = new DataGcoreSecuritygroupMetadataReadOnlyList(this, "metadata_read_only", false);
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

  // security_group_rules - computed: true, optional: false, required: false
  private _securityGroupRules = new DataGcoreSecuritygroupSecurityGroupRulesList(this, "security_group_rules", true);
  public get securityGroupRules() {
    return this._securityGroupRules;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      metadata_k: cdktf.stringToTerraform(this._metadataK),
      metadata_kv: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadataKv),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.numberToTerraform(this._projectId),
      project_name: cdktf.stringToTerraform(this._projectName),
      region_id: cdktf.numberToTerraform(this._regionId),
      region_name: cdktf.stringToTerraform(this._regionName),
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
      metadata_k: {
        value: cdktf.stringToHclTerraform(this._metadataK),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata_kv: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadataKv),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

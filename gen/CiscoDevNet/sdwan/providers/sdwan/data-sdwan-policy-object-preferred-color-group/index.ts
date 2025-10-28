// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.0/docs/data-sources/policy_object_preferred_color_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanPolicyObjectPreferredColorGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.0/docs/data-sources/policy_object_preferred_color_group#feature_profile_id DataSdwanPolicyObjectPreferredColorGroup#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The id of the Policy_object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.0/docs/data-sources/policy_object_preferred_color_group#id DataSdwanPolicyObjectPreferredColorGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataSdwanPolicyObjectPreferredColorGroupEntries {
}

export function dataSdwanPolicyObjectPreferredColorGroupEntriesToTerraform(struct?: DataSdwanPolicyObjectPreferredColorGroupEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanPolicyObjectPreferredColorGroupEntriesToHclTerraform(struct?: DataSdwanPolicyObjectPreferredColorGroupEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanPolicyObjectPreferredColorGroupEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanPolicyObjectPreferredColorGroupEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanPolicyObjectPreferredColorGroupEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // primary_color_preference - computed: true, optional: false, required: false
  public get primaryColorPreference() {
    return cdktf.Fn.tolist(this.getListAttribute('primary_color_preference'));
  }

  // primary_path_preference - computed: true, optional: false, required: false
  public get primaryPathPreference() {
    return this.getStringAttribute('primary_path_preference');
  }

  // secondary_color_preference - computed: true, optional: false, required: false
  public get secondaryColorPreference() {
    return cdktf.Fn.tolist(this.getListAttribute('secondary_color_preference'));
  }

  // secondary_path_preference - computed: true, optional: false, required: false
  public get secondaryPathPreference() {
    return this.getStringAttribute('secondary_path_preference');
  }

  // tertiary_color_preference - computed: true, optional: false, required: false
  public get tertiaryColorPreference() {
    return cdktf.Fn.tolist(this.getListAttribute('tertiary_color_preference'));
  }

  // tertiary_path_preference - computed: true, optional: false, required: false
  public get tertiaryPathPreference() {
    return this.getStringAttribute('tertiary_path_preference');
  }
}

export class DataSdwanPolicyObjectPreferredColorGroupEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanPolicyObjectPreferredColorGroupEntriesOutputReference {
    return new DataSdwanPolicyObjectPreferredColorGroupEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.0/docs/data-sources/policy_object_preferred_color_group sdwan_policy_object_preferred_color_group}
*/
export class DataSdwanPolicyObjectPreferredColorGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_policy_object_preferred_color_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanPolicyObjectPreferredColorGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanPolicyObjectPreferredColorGroup to import
  * @param importFromId The id of the existing DataSdwanPolicyObjectPreferredColorGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.0/docs/data-sources/policy_object_preferred_color_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanPolicyObjectPreferredColorGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_policy_object_preferred_color_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.0/docs/data-sources/policy_object_preferred_color_group sdwan_policy_object_preferred_color_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanPolicyObjectPreferredColorGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanPolicyObjectPreferredColorGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_policy_object_preferred_color_group',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._featureProfileId = config.featureProfileId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // entries - computed: true, optional: false, required: false
  private _entries = new DataSdwanPolicyObjectPreferredColorGroupEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

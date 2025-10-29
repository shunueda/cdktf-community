// https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/data-sources/gcp_permissions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPolarisGcpPermissionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enabled features.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/data-sources/gcp_permissions#features DataPolarisGcpPermissions#features}
  */
  readonly features: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/data-sources/gcp_permissions#id DataPolarisGcpPermissions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/data-sources/gcp_permissions polaris_gcp_permissions}
*/
export class DataPolarisGcpPermissions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "polaris_gcp_permissions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPolarisGcpPermissions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPolarisGcpPermissions to import
  * @param importFromId The id of the existing DataPolarisGcpPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/data-sources/gcp_permissions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPolarisGcpPermissions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "polaris_gcp_permissions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/data-sources/gcp_permissions polaris_gcp_permissions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPolarisGcpPermissionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataPolarisGcpPermissionsConfig) {
    super(scope, id, {
      terraformResourceType: 'polaris_gcp_permissions',
      terraformGeneratorMetadata: {
        providerName: 'polaris',
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
    this._features = config.features;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // features - computed: false, optional: false, required: true
  private _features?: string[]; 
  public get features() {
    return cdktf.Fn.tolist(this.getListAttribute('features'));
  }
  public set features(value: string[]) {
    this._features = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features;
  }

  // hash - computed: true, optional: false, required: false
  public get hash() {
    return this.getStringAttribute('hash');
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

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.getListAttribute('permissions');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      features: cdktf.listMapper(cdktf.stringToTerraform, false)(this._features),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      features: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._features),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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

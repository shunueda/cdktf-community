// https://registry.terraform.io/providers/zitadel/zitadel/2.2.0/docs/data-sources/org
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZitadelOrgConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.2.0/docs/data-sources/org#id DataZitadelOrg#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zitadel/zitadel/2.2.0/docs/data-sources/org zitadel_org}
*/
export class DataZitadelOrg extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zitadel_org";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZitadelOrg resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZitadelOrg to import
  * @param importFromId The id of the existing DataZitadelOrg that should be imported. Refer to the {@link https://registry.terraform.io/providers/zitadel/zitadel/2.2.0/docs/data-sources/org#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZitadelOrg to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zitadel_org", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zitadel/zitadel/2.2.0/docs/data-sources/org zitadel_org} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZitadelOrgConfig
  */
  public constructor(scope: Construct, id: string, config: DataZitadelOrgConfig) {
    super(scope, id, {
      terraformResourceType: 'zitadel_org',
      terraformGeneratorMetadata: {
        providerName: 'zitadel',
        providerVersion: '2.2.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // primary_domain - computed: true, optional: false, required: false
  public get primaryDomain() {
    return this.getStringAttribute('primary_domain');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

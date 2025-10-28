// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.0/docs/data-sources/credentials_https_write
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalystcenterCredentialsHttpsWriteConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the HTTPS credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.0/docs/data-sources/credentials_https_write#description DataCatalystcenterCredentialsHttpsWrite#description}
  */
  readonly description?: string;
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.0/docs/data-sources/credentials_https_write#id DataCatalystcenterCredentialsHttpsWrite#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.0/docs/data-sources/credentials_https_write catalystcenter_credentials_https_write}
*/
export class DataCatalystcenterCredentialsHttpsWrite extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_credentials_https_write";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCatalystcenterCredentialsHttpsWrite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCatalystcenterCredentialsHttpsWrite to import
  * @param importFromId The id of the existing DataCatalystcenterCredentialsHttpsWrite that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.0/docs/data-sources/credentials_https_write#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCatalystcenterCredentialsHttpsWrite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_credentials_https_write", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.0/docs/data-sources/credentials_https_write catalystcenter_credentials_https_write} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCatalystcenterCredentialsHttpsWriteConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCatalystcenterCredentialsHttpsWriteConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_credentials_https_write',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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

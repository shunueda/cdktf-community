// https://registry.terraform.io/providers/dome9/dome9/1.40.3/docs/data-sources/cloudaccount_gcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDome9CloudaccountGcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.3/docs/data-sources/cloudaccount_gcp#id DataDome9CloudaccountGcp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dome9/dome9/1.40.3/docs/data-sources/cloudaccount_gcp dome9_cloudaccount_gcp}
*/
export class DataDome9CloudaccountGcp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dome9_cloudaccount_gcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDome9CloudaccountGcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDome9CloudaccountGcp to import
  * @param importFromId The id of the existing DataDome9CloudaccountGcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/dome9/dome9/1.40.3/docs/data-sources/cloudaccount_gcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDome9CloudaccountGcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dome9_cloudaccount_gcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dome9/dome9/1.40.3/docs/data-sources/cloudaccount_gcp dome9_cloudaccount_gcp} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDome9CloudaccountGcpConfig
  */
  public constructor(scope: Construct, id: string, config: DataDome9CloudaccountGcpConfig) {
    super(scope, id, {
      terraformResourceType: 'dome9_cloudaccount_gcp',
      terraformGeneratorMetadata: {
        providerName: 'dome9',
        providerVersion: '1.40.3'
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

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // gsuite_user - computed: true, optional: false, required: false
  public get gsuiteUser() {
    return this.getStringAttribute('gsuite_user');
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

  // organizational_unit_id - computed: true, optional: false, required: false
  public get organizationalUnitId() {
    return this.getStringAttribute('organizational_unit_id');
  }

  // organizational_unit_name - computed: true, optional: false, required: false
  public get organizationalUnitName() {
    return this.getStringAttribute('organizational_unit_name');
  }

  // organizational_unit_path - computed: true, optional: false, required: false
  public get organizationalUnitPath() {
    return this.getStringAttribute('organizational_unit_path');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // vendor - computed: true, optional: false, required: false
  public get vendor() {
    return this.getStringAttribute('vendor');
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

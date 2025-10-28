// https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/postgres_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStackitPostgresInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/postgres_instance#name DataStackitPostgresInstance#name}
  */
  readonly name: string;
  /**
  * The project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/postgres_instance#project_id DataStackitPostgresInstance#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/postgres_instance stackit_postgres_instance}
*/
export class DataStackitPostgresInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_postgres_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStackitPostgresInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStackitPostgresInstance to import
  * @param importFromId The id of the existing DataStackitPostgresInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/postgres_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStackitPostgresInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_postgres_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/postgres_instance stackit_postgres_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStackitPostgresInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataStackitPostgresInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_postgres_instance',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '1.34.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl - computed: true, optional: false, required: false
  public get acl() {
    return this.getListAttribute('acl');
  }

  // cf_guid - computed: true, optional: false, required: false
  public get cfGuid() {
    return this.getStringAttribute('cf_guid');
  }

  // cf_organization_guid - computed: true, optional: false, required: false
  public get cfOrganizationGuid() {
    return this.getStringAttribute('cf_organization_guid');
  }

  // cf_space_guid - computed: true, optional: false, required: false
  public get cfSpaceGuid() {
    return this.getStringAttribute('cf_space_guid');
  }

  // dashboard_url - computed: true, optional: false, required: false
  public get dashboardUrl() {
    return this.getStringAttribute('dashboard_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // plan - computed: true, optional: false, required: false
  public get plan() {
    return this.getStringAttribute('plan');
  }

  // plan_id - computed: true, optional: false, required: false
  public get planId() {
    return this.getStringAttribute('plan_id');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

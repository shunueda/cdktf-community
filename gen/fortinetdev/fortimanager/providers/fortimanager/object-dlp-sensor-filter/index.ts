// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dlp_sensor_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectDlpSensorFilterAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dlp_sensor_filter#action ObjectDlpSensorFilterA#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dlp_sensor_filter#adom ObjectDlpSensorFilterA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dlp_sensor_filter#archive ObjectDlpSensorFilterA#archive}
  */
  readonly archive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dlp_sensor_filter#company_identifier ObjectDlpSensorFilterA#company_identifier}
  */
  readonly companyIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dlp_sensor_filter#expiry ObjectDlpSensorFilterA#expiry}
  */
  readonly expiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dlp_sensor_filter#file_size ObjectDlpSensorFilterA#file_size}
  */
  readonly fileSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dlp_sensor_filter#file_type ObjectDlpSensorFilterA#file_type}
  */
  readonly fileType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dlp_sensor_filter#filter_by ObjectDlpSensorFilterA#filter_by}
  */
  readonly filterBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dlp_sensor_filter#fosid ObjectDlpSensorFilterA#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dlp_sensor_filter#fp_sensitivity ObjectDlpSensorFilterA#fp_sensitivity}
  */
  readonly fpSensitivity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dlp_sensor_filter#id ObjectDlpSensorFilterA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dlp_sensor_filter#match_percentage ObjectDlpSensorFilterA#match_percentage}
  */
  readonly matchPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dlp_sensor_filter#name ObjectDlpSensorFilterA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dlp_sensor_filter#proto ObjectDlpSensorFilterA#proto}
  */
  readonly proto?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dlp_sensor_filter#regexp ObjectDlpSensorFilterA#regexp}
  */
  readonly regexp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dlp_sensor_filter#scopetype ObjectDlpSensorFilterA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dlp_sensor_filter#sensitivity ObjectDlpSensorFilterA#sensitivity}
  */
  readonly sensitivity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dlp_sensor_filter#sensor ObjectDlpSensorFilterA#sensor}
  */
  readonly sensor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dlp_sensor_filter#severity ObjectDlpSensorFilterA#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dlp_sensor_filter#type ObjectDlpSensorFilterA#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dlp_sensor_filter fortimanager_object_dlp_sensor_filter}
*/
export class ObjectDlpSensorFilterA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_dlp_sensor_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectDlpSensorFilterA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectDlpSensorFilterA to import
  * @param importFromId The id of the existing ObjectDlpSensorFilterA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dlp_sensor_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectDlpSensorFilterA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_dlp_sensor_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dlp_sensor_filter fortimanager_object_dlp_sensor_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectDlpSensorFilterAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectDlpSensorFilterAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_dlp_sensor_filter',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._adom = config.adom;
    this._archive = config.archive;
    this._companyIdentifier = config.companyIdentifier;
    this._expiry = config.expiry;
    this._fileSize = config.fileSize;
    this._fileType = config.fileType;
    this._filterBy = config.filterBy;
    this._fosid = config.fosid;
    this._fpSensitivity = config.fpSensitivity;
    this._id = config.id;
    this._matchPercentage = config.matchPercentage;
    this._name = config.name;
    this._proto = config.proto;
    this._regexp = config.regexp;
    this._scopetype = config.scopetype;
    this._sensitivity = config.sensitivity;
    this._sensor = config.sensor;
    this._severity = config.severity;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // archive - computed: true, optional: true, required: false
  private _archive?: string; 
  public get archive() {
    return this.getStringAttribute('archive');
  }
  public set archive(value: string) {
    this._archive = value;
  }
  public resetArchive() {
    this._archive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveInput() {
    return this._archive;
  }

  // company_identifier - computed: false, optional: true, required: false
  private _companyIdentifier?: string; 
  public get companyIdentifier() {
    return this.getStringAttribute('company_identifier');
  }
  public set companyIdentifier(value: string) {
    this._companyIdentifier = value;
  }
  public resetCompanyIdentifier() {
    this._companyIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyIdentifierInput() {
    return this._companyIdentifier;
  }

  // expiry - computed: false, optional: true, required: false
  private _expiry?: string; 
  public get expiry() {
    return this.getStringAttribute('expiry');
  }
  public set expiry(value: string) {
    this._expiry = value;
  }
  public resetExpiry() {
    this._expiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryInput() {
    return this._expiry;
  }

  // file_size - computed: false, optional: true, required: false
  private _fileSize?: number; 
  public get fileSize() {
    return this.getNumberAttribute('file_size');
  }
  public set fileSize(value: number) {
    this._fileSize = value;
  }
  public resetFileSize() {
    this._fileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSizeInput() {
    return this._fileSize;
  }

  // file_type - computed: false, optional: true, required: false
  private _fileType?: string; 
  public get fileType() {
    return this.getStringAttribute('file_type');
  }
  public set fileType(value: string) {
    this._fileType = value;
  }
  public resetFileType() {
    this._fileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypeInput() {
    return this._fileType;
  }

  // filter_by - computed: true, optional: true, required: false
  private _filterBy?: string; 
  public get filterBy() {
    return this.getStringAttribute('filter_by');
  }
  public set filterBy(value: string) {
    this._filterBy = value;
  }
  public resetFilterBy() {
    this._filterBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterByInput() {
    return this._filterBy;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
  }

  // fp_sensitivity - computed: false, optional: true, required: false
  private _fpSensitivity?: string; 
  public get fpSensitivity() {
    return this.getStringAttribute('fp_sensitivity');
  }
  public set fpSensitivity(value: string) {
    this._fpSensitivity = value;
  }
  public resetFpSensitivity() {
    this._fpSensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpSensitivityInput() {
    return this._fpSensitivity;
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

  // match_percentage - computed: false, optional: true, required: false
  private _matchPercentage?: number; 
  public get matchPercentage() {
    return this.getNumberAttribute('match_percentage');
  }
  public set matchPercentage(value: number) {
    this._matchPercentage = value;
  }
  public resetMatchPercentage() {
    this._matchPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPercentageInput() {
    return this._matchPercentage;
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

  // proto - computed: true, optional: true, required: false
  private _proto?: string[]; 
  public get proto() {
    return cdktf.Fn.tolist(this.getListAttribute('proto'));
  }
  public set proto(value: string[]) {
    this._proto = value;
  }
  public resetProto() {
    this._proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // regexp - computed: false, optional: true, required: false
  private _regexp?: string; 
  public get regexp() {
    return this.getStringAttribute('regexp');
  }
  public set regexp(value: string) {
    this._regexp = value;
  }
  public resetRegexp() {
    this._regexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpInput() {
    return this._regexp;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // sensitivity - computed: false, optional: true, required: false
  private _sensitivity?: string; 
  public get sensitivity() {
    return this.getStringAttribute('sensitivity');
  }
  public set sensitivity(value: string) {
    this._sensitivity = value;
  }
  public resetSensitivity() {
    this._sensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityInput() {
    return this._sensitivity;
  }

  // sensor - computed: false, optional: false, required: true
  private _sensor?: string; 
  public get sensor() {
    return this.getStringAttribute('sensor');
  }
  public set sensor(value: string) {
    this._sensor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensorInput() {
    return this._sensor;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // type - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      adom: cdktf.stringToTerraform(this._adom),
      archive: cdktf.stringToTerraform(this._archive),
      company_identifier: cdktf.stringToTerraform(this._companyIdentifier),
      expiry: cdktf.stringToTerraform(this._expiry),
      file_size: cdktf.numberToTerraform(this._fileSize),
      file_type: cdktf.stringToTerraform(this._fileType),
      filter_by: cdktf.stringToTerraform(this._filterBy),
      fosid: cdktf.numberToTerraform(this._fosid),
      fp_sensitivity: cdktf.stringToTerraform(this._fpSensitivity),
      id: cdktf.stringToTerraform(this._id),
      match_percentage: cdktf.numberToTerraform(this._matchPercentage),
      name: cdktf.stringToTerraform(this._name),
      proto: cdktf.listMapper(cdktf.stringToTerraform, false)(this._proto),
      regexp: cdktf.stringToTerraform(this._regexp),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      sensitivity: cdktf.stringToTerraform(this._sensitivity),
      sensor: cdktf.stringToTerraform(this._sensor),
      severity: cdktf.stringToTerraform(this._severity),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      archive: {
        value: cdktf.stringToHclTerraform(this._archive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      company_identifier: {
        value: cdktf.stringToHclTerraform(this._companyIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiry: {
        value: cdktf.stringToHclTerraform(this._expiry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_size: {
        value: cdktf.numberToHclTerraform(this._fileSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      file_type: {
        value: cdktf.stringToHclTerraform(this._fileType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_by: {
        value: cdktf.stringToHclTerraform(this._filterBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fp_sensitivity: {
        value: cdktf.stringToHclTerraform(this._fpSensitivity),
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
      match_percentage: {
        value: cdktf.numberToHclTerraform(this._matchPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proto: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._proto),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      regexp: {
        value: cdktf.stringToHclTerraform(this._regexp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sensitivity: {
        value: cdktf.stringToHclTerraform(this._sensitivity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sensor: {
        value: cdktf.stringToHclTerraform(this._sensor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
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
